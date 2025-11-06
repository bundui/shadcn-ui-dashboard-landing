"use client";

import { initializePaddle, InitializePaddleOptions, Paddle } from "@paddle/paddle-js";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useThanksDialogStore } from "@/store/thanks-dialog-store";
import { useSpinnerStore } from "@/store/spinner-store";
import { products } from "@/lib/products";

type PaddleEventName = "checkout.loaded" | "checkout.completed";

interface PaddleEventData {
  items: { product: { name: string }; price_id: string }[];
  totals: {
    total: number;
  };
  customer?: {
    email: string;
  };
}

export default function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const paddleRef = useRef<Paddle | null>(null);
  const storeThanksDialog = useThanksDialogStore();
  const storeBodySpinner = useSpinnerStore();

  const handlePaddleEvent = async ({
    name,
    data
  }: {
    name: PaddleEventName;
    data: PaddleEventData;
  }) => {
    const currentPaddle = paddleRef.current;
    if ((currentPaddle && name === "checkout.loaded") || name === "checkout.completed") {
      const priceId = data?.items?.[0]?.price_id;
      const currentProduct = products.find(
        (p) =>
          p.paddle_id[process.env.NEXT_PUBLIC_PADDLE_ENV as "production" | "sandbox"] == priceId
      );

      if (currentProduct) {
        // send email
        if (name === "checkout.completed") {
          currentPaddle?.Checkout.close();
          storeBodySpinner.toggleOpen();

          // create a license key for customer
          const licenseData = await axios.post("/api/license-key/generate", {
            email: data?.customer?.email,
            project_name: currentProduct?.full_name,
            product_type: currentProduct?.type,
            website_product_id: currentProduct?.id
          });

          if (licenseData?.data?.license_key) {
            // send mail for me and customer
            await axios.post("/api/emails/new-sale", {
              productName: currentProduct?.title,
              customerEmail: data?.customer?.email ?? "",
              price: `$${data.totals.total}`,
              license_key: licenseData?.data?.license_key
            });

            storeBodySpinner.toggleOpen();

            // thanks dialog
            storeThanksDialog.toggleOpen();
          }
        }
      }
    }
  };

  useEffect(() => {
    const environment = process.env.NEXT_PUBLIC_PADDLE_ENV;
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

    if (!environment || !token) {
      console.error("Paddle environment or token is missing");
      return;
    }

    initializePaddle({
      environment,
      token,
      eventCallback: handlePaddleEvent
    } as InitializePaddleOptions)
      .then((paddleInstance) => {
        if (paddleInstance) {
          paddleRef.current = paddleInstance; // Ref'e paddle atama
          setPaddle(paddleInstance);
        }
      })
      .catch((err) => {
        console.error("Error initializing Paddle:", err);
      });
  }, []);

  return paddle;
}

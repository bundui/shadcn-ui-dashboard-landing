"use client";

import React, { useEffect, useState, useCallback } from "react";
import usePaddle from "@/hooks/use-paddle";
import { Product, products } from "@/lib/products";
import { cn } from "@/lib/utils";

type PaddleCheckoutType = {
  children: React.ReactNode;
  product_key?: string;
  className?: string;
};

export default function PaddleCheckout({ children, className, product_key }: PaddleCheckoutType) {
  const paddle = usePaddle();
  const [selectProduct, setSelectProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (product_key) {
      const product = products.find((item) => item.id === product_key);
      setSelectProduct(product || null);
    }
  }, [product_key]);

  const openCheckout = useCallback(() => {
    if (!selectProduct || !paddle) return;

    const paddleEnv = process.env.NEXT_PUBLIC_PADDLE_ENV as "production" | "sandbox" | undefined;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!paddleEnv || !baseUrl) {
      console.error("Paddle environment or base URL is missing");
      return;
    }

    const priceId = selectProduct.paddle_id[paddleEnv];
    if (!priceId) {
      console.error("Product does not have a valid priceId for the selected environment");
      return;
    }

    paddle.Checkout.open({
      settings: {
        // successUrl: `${baseUrl}/thank-you?id=${selectProduct.id}`
      },
      items: [
        {
          priceId,
          quantity: 1
        }
      ]
    });
  }, [selectProduct, paddle]);

  return (
    <div className={cn("inline", className)} onClick={openCheckout}>
      {children}
    </div>
  );
}

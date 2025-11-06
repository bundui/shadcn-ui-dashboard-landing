"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Product, products } from "@/lib/products";

export default function GithubAccessForm() {
  const searchParams = useSearchParams();
  const paramProjectID = searchParams.get("id");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>();

  const formSchema = z.object({
    github_email: z.string().email().trim().min(1),
    payment_email: z.string().email().trim().min(1),
    // license_code: z.string().trim().min(1),
    project_name: z.string().trim().min(1)
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      github_email: "",
      payment_email: "",
      // license_code: "",
      project_name: ""
    }
  });

  useEffect(() => {
    if (paramProjectID) {
      const p = products.find((item) => item.id == Number(paramProjectID));
      if (p) {
        setSelectedProduct(p);
        form.reset({
          project_name: p.title
        });
      }
    }
  }, [paramProjectID]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/emails/github-access", values, {
        headers: {
          "content-type": "application/json"
        }
      });

      if (res.status === 200) {
        setSuccess(true);
      }
    } catch (err) {
      setError("An error occurred, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-8 flex max-w-md flex-col gap-4">
      <h2 className="mb-4 text-xl font-semibold">Request Access</h2>
      {success ? (
        <p className="text-green-500">We received your request!</p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="github_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Email address to send the invitation to</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>The e-mail address where the payment was made</FormDescription>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="license_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="project_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select project</FormLabel>
                  <FormControl>
                    <Select onValueChange={(value) => form.setValue("project_name", value)}>
                      <SelectTrigger>
                        {selectedProduct ? (
                          selectedProduct.full_name
                        ) : (
                          <SelectValue placeholder="Select..." />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {products.map((product) => (
                            <SelectItem key={product.id} value={product.key}>
                              {product.full_name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}

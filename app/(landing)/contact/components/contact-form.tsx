"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl border-x px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-5xl py-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            <Mail />
            Get in Touch
          </Badge>
          <h1 className="font-heading mb-4 text-3xl lg:text-5xl">Contact Us</h1>
          <p className="text-muted-foreground text-lg text-balance">
            Have questions about Shadcn Dashboard? Need support or want to discuss custom solutions?
            We&#39;d love to hear from you.
          </p>
        </header>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl pb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
              {isSubmitting ? "Sending..." : <>Send Message</>}
            </Button>
          </form>

          <div className="text-center">
            <p className="mt-4 text-sm text-gray-500">We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

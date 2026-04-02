import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-7xl border-x py-20">
        <div className="mb-16 flex items-center justify-between px-4 text-center">
          <h2 className="font-heading mb-4 text-3xl lg:text-4xl">Loved by Developers Worldwide</h2>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-muted-foreground ml-2 text-end text-xs">
              4.9/5 from 500+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 border-y md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Frontend Developer",
              content:
                "This template saved me weeks of development time. The code quality is exceptional!",
              avatar: "SJ"
            },
            {
              name: "Mike Chen",
              role: "Startup Founder",
              content: "Perfect for our admin panel. Professional design and easy to customize.",
              avatar: "MC"
            },
            {
              name: "Lisa Rodriguez",
              role: "UI/UX Designer",
              content: "Beautiful components and great attention to detail. Highly recommended!",
              avatar: "LR"
            }
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="&:nth-child(3n)]:border-e-transparent! rounded-none border-0 border-e shadow-none">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">&#34;{testimonial.content}&#34;</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

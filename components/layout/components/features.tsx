import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Lightning Fast",
    description:
      "Built with performance in mind. Optimized React components for blazing fast user experience."
  },
  {
    icon: <Palette className="h-6 w-6 text-blue-500" />,
    title: "Beautiful Design",
    description:
      "Carefully crafted components with attention to detail. Modern aesthetics that users love."
  },
  {
    icon: <Code className="h-6 w-6 text-green-600" />,
    title: "Developer Friendly",
    description:
      "Clean, well-documented code with TypeScript support. Easy to customize and extend."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-orange-600" />,
    title: "Fully Responsive",
    description: "Perfect on all devices. Mobile-first design approach ensures great UX everywhere."
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: "Secure & Reliable",
    description: "Built with security best practices. Production-ready code you can trust."
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Community Driven",
    description: "Active community support with regular updates and feature improvements."
  }
];

export default function Features() {
  return (
    <section className="bg-background relative z-10">
      <div className="mx-auto max-w-7xl border-x py-20">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl lg:text-4xl">
            <span className="text-blue-500">Shadcn Dashboard</span> Features
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Our template comes packed with professionally designed components, layouts, and features
            to accelerate your development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:bg-muted/50 rounded-none border-0 border-e border-b transition-all duration-300 [&:nth-child(3n)]:border-e-0">
              <CardContent>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

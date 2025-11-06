import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Lightbulb, Rocket } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      status: "completed",
      quarter: "Q4 2023",
      title: "Shadcn Dashboard v2.0 Launch",
      items: [
        "Complete UI redesign with Shadcn/UI",
        "TypeScript migration",
        "Dark mode support",
        "Mobile-first responsive design",
        "50+ new components",
        "Performance optimizations"
      ]
    },
    {
      status: "completed",
      quarter: "Q1 2024",
      title: "Enhanced Features",
      items: [
        "Advanced data tables with sorting/filtering",
        "Real-time notifications system",
        "Multiple dashboard layouts",
        "Email template collection",
        "Form validation patterns",
        "API integration examples"
      ]
    },
    {
      status: "in-progress",
      quarter: "Q2 2024",
      title: "Developer Experience",
      items: [
        "Comprehensive documentation site",
        "Video tutorial series",
        "Storybook component library",
        "CLI tool for quick setup",
        "Custom hooks library",
        "Testing utilities and examples"
      ]
    },
    {
      status: "planned",
      quarter: "Q3 2024",
      title: "Advanced Components",
      items: [
        "Drag & drop dashboard builder",
        "Advanced chart library integration",
        "Calendar and scheduling components",
        "File upload with preview",
        "Rich text editor integration",
        "Multi-step form wizard"
      ]
    },
    {
      status: "planned",
      quarter: "Q4 2024",
      title: "Integration & Plugins",
      items: [
        "Authentication provider templates",
        "Database integration examples",
        "Payment gateway templates",
        "Social media integrations",
        "Analytics and tracking setup",
        "SEO optimization tools"
      ]
    },
    {
      status: "future",
      quarter: "2025",
      title: "Next Generation Features",
      items: [
        "AI-powered component generation",
        "Real-time collaboration tools",
        "Advanced theming system",
        "Micro-frontend architecture",
        "Progressive Web App features",
        "Advanced accessibility tools"
      ]
    }
  ];

  const columns = [
    {
      status: "completed",
      title: "Completed",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      status: "in-progress",
      title: "In Progress",
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      status: "planned",
      title: "Planned",
      icon: <Lightbulb className="h-5 w-5 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      status: "future",
      title: "Future",
      icon: <Rocket className="h-5 w-5 text-blue-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const getItemsByStatus = (status: string) => {
    return roadmapItems.filter((item) => item.status === status);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl border-x">
        <div className="mx-auto max-w-5xl py-20 text-center">
          <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">
            <Rocket className="mr-1 h-4 w-4" />
            Product Roadmap
          </Badge>
          <h1 className="font-heading mb-4 flex justify-center gap-2 text-4xl lg:text-5xl">
            <span className="block bg-gradient-to-b from-indigo-400 to-blue-700 bg-clip-text text-transparent">
              Shadcn Dashboard
            </span>{" "}
            Roadmap
          </h1>
          <p className="text-muted-foreground text-lg text-balance">
            We&#39;re constantly improving Shadcn Dashboard based on user feedback and industry
            trends. Here&#39;s what we&#39;ve accomplished and what&#39;s coming next.
          </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 border-t md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.status} className={`min-h-[600px] border-e [&:last-child]:border-e-0`}>
              {/* Column Header */}
              <div className="flex items-center gap-2 border-b p-4">
                {column.icon}
                <h3 className="font-semibold">{column.title}</h3>
                <span className="text-muted-foreground ml-auto text-sm">
                  {getItemsByStatus(column.status).length}
                </span>
              </div>

              {/* Column Items */}
              <div>
                {getItemsByStatus(column.status).map((item, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer border-0 border-b transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-sm leading-tight font-semibold text-gray-900">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {item.items.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                            <span className="text-muted-foreground text-xs leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                        {item.items.length > 3 && (
                          <li className="text-xs font-medium text-gray-500">
                            +{item.items.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl border-x px-4 py-10">
          <div className="mb-8 text-center">
            <h2 className="font-heading mb-4 text-3xl">Continuous Innovation</h2>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence drives constant improvement
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { value: "24+", label: "Updates Released", description: "Regular feature updates" },
              { value: "150+", label: "Features Added", description: "Since launch" },
              { value: "5k+", label: "User Requests", description: "Community feedback" },
              { value: "99%", label: "Uptime", description: "Reliable service" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-1 text-3xl font-bold">{stat.value}</div>
                <div className="mb-1 font-semibold">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

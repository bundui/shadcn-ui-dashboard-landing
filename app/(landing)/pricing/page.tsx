"use client";

import { Check, AlertCircleIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { usePricingStore, PlanFeature } from "./store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
import PaddleCheckout from "@/components/paddle-checkout";
import { products } from "@/lib/products";

function App() {
  const { technologies, allData, selectedTab, setSelectedTab } = usePricingStore();

  const renderFeatureValue = (feature: PlanFeature) => {
    if (!feature.isAvailable) {
      return <div className="h-1 w-6 rounded bg-gray-300"></div>;
    }

    if (feature.featureValue === "true") {
      return (
        <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500">
          <Check className="size-3 stroke-[3] text-white" />
        </div>
      );
    }

    return <span className="text-sm font-semibold">{feature.featureValue}</span>;
  };

  const renderPricingTable = (techId: string) => {
    const data = allData[techId];
    if (!data || data.plans.length === 0) return null;

    const tech = technologies.find((t) => t.id === techId);
    if (!tech) return null;

    const featureNames = data.features[data.plans[0]?.id] || [];

    return (
      <div className="grid grid-cols-[346px_1fr_1fr] gap-0 overflow-hidden border-y">
        <div>
          <div className="h-[248px] border-b p-6"></div>

          <div className="bg-muted/50 flex h-14 items-center border-b px-6">
            <h3 className="text-sm font-semibold">Key Features</h3>
          </div>

          {featureNames.map((feature, idx) => {
            const isLast = idx === featureNames.length - 1;
            return (
              <div
                key={feature.id}
                className={`flex h-14 items-center gap-3 px-6 ${!isLast ? "border-b" : ""}`}>
                <span className="text-muted-foreground flex items-center gap-2 text-sm">
                  {feature.featureName}
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircleIcon className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{feature.featureDesc}</p>
                    </TooltipContent>
                  </Tooltip>
                </span>
              </div>
            );
          })}
        </div>

        {data.plans.map((plan) => {
          const planFeatures = data.features[plan.id] || [];
          const isPopular = plan.isPopular;
          const p = products.find((p) => p.id === plan.id);

          return (
            <div key={plan.id} className={`border-l ${isPopular ? "bg-indigo-50/30" : ""}`}>
              <div className="h-[200px] p-6">
                {isPopular ? (
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className="text-xl">{plan.name}</h3>
                    <span className="rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
                      Most Popular
                    </span>
                  </div>
                ) : (
                  <h3 className="mb-3 text-xl">{plan.name}</h3>
                )}
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.discountedPrice}</span>
                  <span className="text-muted-foreground text-xl line-through">
                    ${plan.originalPrice}
                  </span>
                </div>
                <div className="mb-1 text-sm font-semibold">One-time Payment</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div>
                <PaddleCheckout product_key={p?.id}>
                  <Button className="h-12 w-full">
                    Buy {tech.name} - {plan.name}
                  </Button>
                </PaddleCheckout>
              </div>

              <div className="bg-muted/50 flex h-14 items-center justify-center border-b px-6">
                <h4 className="text-sm font-semibold">Features Limits</h4>
              </div>

              {planFeatures.map((feature, idx) => {
                const isLast = idx === planFeatures.length - 1;
                return (
                  <div
                    key={feature.id}
                    className={`flex h-14 items-center justify-center px-6 ${!isLast ? "border-b" : ""}`}>
                    {renderFeatureValue(feature)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mx-auto min-h-screen max-w-7xl border-x">
      <div className="mx-auto max-w-3xl py-20 text-center">
        <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
          Pricing Plans
        </Badge>
        <h1 className="font-heading mb-4 text-3xl lg:text-5xl">
          Get{" "}
          <span className="inline bg-gradient-to-b from-indigo-400 to-blue-700 bg-clip-text text-transparent">
            Shadcn UI
          </span>{" "}
          Dashboard
        </h1>
        <p className="text-muted-foreground text-lg text-balance">
          Get lifetime access to Shadcn Dashboard with our one-time payment plans. No subscriptions,
          no recurring fees.
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="gap-0">
        <TabsList className="h-auto w-full justify-start rounded-none border-t bg-transparent p-0">
          {technologies.map((tech, i) => (
            <React.Fragment key={i}>
              {tech.isComing ? (
                <Tooltip>
                  <TooltipTrigger>
                    <TabsTrigger
                      key={tech.id}
                      value={tech.id}
                      disabled={tech.isComing}
                      className="data-[state=active]:bg-muted hover:bg-muted/50 text-muted-foreground flex-none rounded-none px-7 py-4 data-[state=active]:shadow-none"
                      asChild>
                      <div className="flex items-center gap-2 opacity-70">
                        <img src={`/techs/${tech.id}.svg`} className="size-5 grayscale-100" />
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming soon</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <TabsTrigger
                  key={tech.id}
                  value={tech.id}
                  disabled={tech.isComing}
                  className="data-[state=active]:bg-muted hover:bg-muted/50 text-muted-foreground flex-none rounded-none px-7 py-4 data-[state=active]:shadow-none"
                  asChild>
                  <div className="flex items-center gap-2">
                    <img src={`/techs/${tech.id}.svg`} className="size-5 grayscale-100" alt="" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </TabsTrigger>
              )}
            </React.Fragment>
          ))}
        </TabsList>

        {technologies.map((tech) => (
          <TabsContent key={tech.id} value={tech.id}>
            {renderPricingTable(tech.id)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default App;

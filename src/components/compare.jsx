import React from "react";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card"; // Ensure this path is correct

const features = [
  { name: "Without Hormones", forchics: true, others: false, extensions: true },
  { name: "Painless", forchics: true, others: false, extensions: false },
  { name: "Affordable", forchics: true, others: false, extensions: false },
  {
    name: "Strengthens follicles",
    forchics: true,
    others: false,
    extensions: false,
  },
  {
    name: "Safe To Use Daily",
    forchics: true,
    others: false,
    extensions: true,
  },
  {
    name: "Growth Guarantee",
    forchics: true,
    others: false,
    extensions: false,
  },
];

export default function Compare() {
  return (
    <section className="w-full py-12 bg-[#FFE3CA]">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-2">How We Compare</h2>
          <p className="text-muted-foreground text-base">
            The future of lashes is safer, more affordable and good for you.
          </p>
        </div>

        <Card className="overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-4">
            {/* Features Column */}
            <div className="bg-pink-500 text-white">
              <div className="h-14 invisible " /> 
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 border-b border-pink-400 last:border-b-0 min-h-[64px] flex items-center justify-center text-center"
                >
                  {feature.name}
                </div>
              ))}
            </div>

            {/* Comparison Columns */}
            <div className="col-span-3 grid grid-cols-3">
              {/* Headers */}
              <div className="p-3 text-center font-semibold border-b">
                FORCHICS
              </div>
              <div className="p-3 text-center font-semibold border-b border-l">
                OTHER SERUMS
              </div>
              <div className="p-3 text-center font-semibold border-b border-l">
                EXTENSIONS
              </div>

              {/* Comparison Cells */}
              {features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  <div className="flex items-center justify-center p-4 border-b last:border-b-0">
                    {feature.forchics ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-black" />
                    )}
                  </div>
                  <div className="flex items-center justify-center p-4 border-b border-l last:border-b-0">
                    {feature.others ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-center p-4 border-b border-l last:border-b-0">
                    {feature.extensions ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

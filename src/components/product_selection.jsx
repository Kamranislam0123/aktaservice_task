"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function ProductSelection() {
  const [selectedPackage, setSelectedPackage] = useState("4bottles");

  const packages = [
    { id: "4bottles", quantity: "4 Bottles", price: 17.5, label: "BEST DEAL" },
    { id: "3bottles", quantity: "3 Bottles", price: 19.6 },
    { id: "2bottles", quantity: "2 Bottles", price: 21.5 },
    { id: "1bottle", quantity: "1 Bottle", price: 24 },
  ];

  const gifts = [
    {
      name: "Digital Book",
      price: 10,
      image: "/ebook_110x.webp",
      minBottles: 1,
    },
    {
      name: "Free Shipping",
      price: 6,
      image: "/free-delivery_110x.avif",
      minBottles: 1,
    },
    {
      name: "Lash Curler",
      price: 19,
      image: "/curler_110x.webp",
      minBottles: 2,
    },
    {
      name: "Mascara",
      price: 25,
      image: "/Mascara_110x.avif",
      minBottles: 4,
    },
  ];

  const getBottleCount = (id) => {
    return parseInt(id.replace("bottles", "").replace("bottle", ""));
  };

  const selectedBottleCount = getBottleCount(selectedPackage);

  return (
    <div className="mx-auto space-y-6">
      {/* Radio Group for Package Selection */}
      <RadioGroup
        value={selectedPackage}
        onValueChange={setSelectedPackage}
        className="grid grid-cols-2 gap-4"
      >
        {packages.map((pkg) => (
          <Label
            key={pkg.id}
            htmlFor={pkg.id}
            className={`relative flex items-center justify-start gap-16 border-2 rounded-lg p-3 cursor-pointer ${
              selectedPackage === pkg.id
                ? "border-red-500 bg-red-50"
                : "hover:border-[#F86C84]"
            }`}
          >
            <RadioGroupItem
              value={pkg.id}
              id={pkg.id}
              className="peer sr-only"
            />
            <div className="w-5 h-5 flex items-center justify-center">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedPackage === pkg.id
                    ? "bg-red-500 border-red-500"
                    : "border-gray-300"
                }`}
              ></div>
            </div>
            {pkg.label && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {pkg.label}
              </span>
            )}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-bold text-lg">{pkg.quantity}</span>
              <span className="text-sm text-gray-600">${pkg.price}/each</span>
            </div>
          </Label>
        ))}
      </RadioGroup>

      {/* Gifts Section */}
      <div className="space-y-4">
        <div className="text-center">
          <span className="font-bold">EXCLUSIVE SALE!</span>{" "}
          <span className="text-black text-sm font-light">
            FREE Gifts With Your First Order
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {gifts.map((gift, index) => {
   
    const isLocked = index >= getBottleCount(selectedPackage);

    // Determine the text to display under the lock icon
    const lockedText =
      index === 3
        ? "4 Bottles"
        : index === 2
        ? "3 Bottles"
        : index === 1
        ? "2 Bottles"
        : "";

    return (
      <div
        key={gift.name}
        className={`relative rounded-lg border-2 ${
          isLocked
            ? "border-dashed border-black bg-[#f5f5f5]"
            : "border-solid border-gray-300 bg-[#FEEAE8]"
        } p-3 text-center`}
      >
        <div className="relative aspect-square mb-2">
          {isLocked && (
            <div className="absolute inset-0 bg-[#f5f5f5] flex flex-col items-center justify-center z-10">
              <Lock className="w-6 h-6 text-black mb-1" />
              <span className="text-sm text-gray-700">{lockedText}</span>
            </div>
          )}
          <Image
            src={gift.image}
            alt={gift.name}
            fill
            className={`object-contain ${
              isLocked ? "opacity-40" : "opacity-100"
            }`}
          />
        </div>
        <div className="space-y-1">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD6DD] text-black text-xs font-bold py-2 px-1 rounded">
            FREE <span className="line-through">${gift.price}</span>
          </div>

          <div className={`text-sm font-medium ${isLocked && "opacity-50"}`}>
            {gift.name}
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>

      {/* Stock Info */}
      <div className="flex items-center justify-start font-semibold text-lime-500 ">
        <div className="relative flex items-center justify-center h-3 w-3 mr-2">
          <span className="absolute h-3 w-3 bg-lime-400 rounded-full animate-ping"></span>
          <span className="h-3 w-3 bg-lime-400 rounded-full"></span>
        </div>
        In stock - Limited units available
      </div>
    </div>
  );
}

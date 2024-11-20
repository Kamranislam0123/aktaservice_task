"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ProductSelection from "./product_selection";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/image1.webp", "/image2.webp"];

  const packages = [
    { id: "4bottles", name: "4 Bottles", price: 17.5, label: "BEST DEAL" },
    { id: "3bottles", name: "3 Bottles", price: 15.5 },
    { id: "2bottles", name: "2 Bottles", price: 21.5 },
    { id: "1bottle", name: "1 Bottle", price: 24 },
  ];

  const benefits = [
    { icon: "🕒", text: "Results in 2 weeks" },
    { icon: "💰", text: "Affordable treatment" },
    { icon: "✨", text: "Long-lasting result" },
    { icon: "💆‍♀️", text: "Revitalize hair follicle" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 aspect-square flex-shrink-0 ${
                  selectedImage === index
                    ? " border rounded-sm m-1 ring-2  ring-pink-500"
                    : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded "
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm">Excellent 4.9 | 1703 Reviews</span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold">Save Up To 56% Today</h1>
            <p className="text-2xl font-semibold">+ 4 FREE Gifts</p>
          </div>

          {/* Subtitle */}
          <p className="text-lg font-medium">
            Get fuller and healthier eyelashes in 30 days
          </p>

          {/* Benefits */}
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-xl">{benefit.icon}</span>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>

          {/* Order Deadline */}
          <div className="relative border-2 bg-[#FFF4F3] border-dotted border-[#F86C84] rounded-lg p-4 text-center text-black font-bold">
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex items-center">
                <span className="absolute h-3 w-3 bg-[#F86C84] rounded-full animate-ping"></span>
                <span className="h-3 w-3 bg-[#F86C84] rounded-full"></span>
              </span>
              <span>Order by Nov. 21th for guaranteed FREE Gifts</span>
            </div>
          </div>

          <ProductSelection />

          {/* Exclusive Sale Banner */}
          
        </div>
      </div>
    </div>
  );
}

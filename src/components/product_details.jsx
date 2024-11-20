"use client";

import { useState } from "react";
import {
  Star,
  ArrowRight,
  Leaf,
  Droplet,
  Sprout,
  Eye,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import ProductSelection from "./product_selection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/image1.webp",
    "/image2.webp",
    "/ForChicsEyelashGrowthSerum1.webp",
    "/ForChicsEyelashGrowthSerum2.webp",
    "/ForChicsEyelashGrowthSerum3.webp",
    "/ForChicsEyelashGrowthSerum4.webp",
    "/ForChicsEyelashGrowthSerum5.webp",
    "/ForChicsEyelashGrowthSerum6.webp",
  ];

  const goToNextImage = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const benefits = [
    { image: "/calender.svg", text: "Results in 2 weeks" },
    { image: "/doller.png", text: "Affordable treatment" },
    { image: "/eyelashes.svg", text: "Long-lasting result" },
    { image: "/mingcute_eyebrow-line.png", text: "Revitalize hair follicle" },
  ];

  const ingredients = [
    {
      icon: Sprout,
      title: "Rosmarinus Officinalis Leaf Extract",
      description: "Stimulates growth",
    },
    {
      icon: Droplet,
      title: "Vitamin B5",
      description: "Smooths, conditions and supports",
    },
    {
      icon: Leaf,
      title: "Panax Ginseng",
      description: "Helps grow long, fluttery lashes",
    },
    {
      icon: Eye,
      title: "Vitamin B7",
      description: "Vital for healthy hair growth",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square group">
            <Image
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-cover rounded-xl"
            />
            <button
              onClick={goToPreviousImage}
              disabled={selectedImage === 0}
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                selectedImage === 0 ? "hidden" : ""
              }`}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={goToNextImage}
              disabled={selectedImage === images.length - 1}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                selectedImage === images.length - 1 ? "cursor-not-allowed" : ""
              }`}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 aspect-square flex-shrink-0 ${
                  selectedImage === index
                    ? "border rounded-sm m-1 ring-2 ring-pink-500"
                    : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm md:text-base">
              Excellent 4.9 | 1703 Reviews
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold">
            Save Up To 56% Today <br /> + 4 FREE Gifts
          </h1>

          <p className="text-base font-bold">
            Get fuller and healthier eyelashes in 30 days
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src={benefit.image}
                  alt={benefit.text}
                  width={32}
                  height={32}
                  className="object-cover rounded"
                />
                <span className="text-sm md:text-base">{benefit.text}</span>
              </li>
            ))}
          </ul>
          <div className="border-2 bg-[#FFF4F3] border-dotted border-[#F86C84] rounded-lg p-4 text-center text-black font-bold">
            <div className="flex items-center justify-center gap-2">
              
              <span className="relative flex items-center">
                <span className="absolute h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
                <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              </span>
             
              <span className="text-sm md:text-base">
                Order by Nov. 21th for guaranteed FREE Gifts
              </span>
            </div>
          </div>

          <ProductSelection />
          <button className="w-full h-14 md:h-[80px] transition m-2 text-lg md:text-2xl uppercase rounded-xl font-bold bg-black text-center text-white focus:outline-none flex items-center justify-between px-4">
            <p className="flex-grow text-lg md:text-2xl font-bold text-center">
              Add to cart
            </p>
            <ArrowRight className="text-white " />
          </button>
          <div className="w-full bg-white rounded-l">
            <div className="relative w-full h-[40px] md:h-[50px]">
              <Image
                src="/payment-fc.svg"
                alt="Accepted payment methods"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Star, ArrowRight, Leaf, Droplet, Sprout, Eye } from "lucide-react";
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

          <button className="w-full h-[80px] transition m-2 text-2xl uppercase rounded-xl font-bold bg-black text-center text-white focus:outline-none flex items-center justify-between px-4">
            <p className="flex-grow text-center">Add to cart</p>
            <ArrowRight className="text-white " />
          </button>

          {/* Payment Methods */}

          <div className="w-full bg-white rounded-l">
            <div className="relative w-full h-[50px]">
              <Image
                src="/payment-fc.svg"
                alt="Accepted payment methods"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Payment Methods end */}

          <Accordion
            type="single"
            collapsible
            className="w-full border border-gray-300 rounded-lg shadow-md p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl">
                Description
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-base">What is it</h3>
                    <p className="text-base text-muted-foreground mt-1">
                      ForLash Eyelash Enhancing Serum is a powerful serum that
                      targets brittle, short and sparse lashes!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base">Why it's special</h3>
                    <p className="text-base text-muted-foreground mt-1">
                      It is fortified with vitamins, extracts and peptides to
                      nourish and infuse your eyelashes with what they need to
                      look longer, fuller and voluminous in 27 days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base">The Benefits</h3>
                    <ul className="list-disc list-inside text-base text-muted-foreground mt-1 space-y-2">
                      <li>
                        Real results - up to 55% longer and 75% more voluminous
                        looking lashes *Results may vary from person to person
                      </li>
                      <li>Easy application - less than 5 seconds</li>
                      <li>
                        Oil-Free, Safe with lash extensions and contact lens
                        wearers
                      </li>
                      <li>Dermatologist & ophthalmologist tested</li>
                      <li>Trichologist approved</li>
                    </ul>
                  </div>

                  <p className="text-base text-muted-foreground">
                    We offer a risk-free Money-Back Guarantee if you have not
                    achieved any results after 12 weeks of use.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-xl">
                How to apply?
              </AccordionTrigger>
              <AccordionContent>
                <h1 className="font-bold text-xl m-2">Step 1</h1>
                <p className="text-base m-2">
                  Remove your makeup with an oil-free makeup remover or
                  cleanser.
                </p>
                <h1 className="font-bold text-xl m-2">Step 2</h1>
                <p className="text-base m-2">
                  Apply only one stroke of ForLash at the root of your upper
                  lashes (like an eyeliner) once a day whilst your eye is
                  closed. One dip is sufficient for both lash lines.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl">
                Ingredients
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6  m-4">
                  {ingredients.map((ingredient, index) => {
                    const Icon = ingredient.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="rounded-full bg-pink-50 p-1.5 flex-shrink-0">
                          <Icon className="h-4 w-4 text-pink-500" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold leading-tight">
                            {ingredient.title}
                          </h3>
                          <p className="text-base text-muted-foreground mt-0.5">
                            {ingredient.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm font-light">
                  Purified Water, Panax Ginseng, Ligustrum Lucidum Extract,
                  Butylene Glycol, Ganoderma Sinensis Extract, Rosmarinus
                  Officinalis Extract, Magnolia Officinalis Bark Extract,
                  Biotinoyl Tripeptide-4, Myristoyl Pentapeptide-17, Sodium
                  Benzoate, Potassium Sorbate, Vitamin B7 (Biotin), Tocopherol,
                  Vitamin E
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold text-xl">
                Does it really work?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base ">
                  Yes, it does! However, you must be patient and consistent. The
                  time before you see results can vary depending on your lashes'
                  growth cycle stage when you start to use the product. It
                  normally takes between 8-12 weeks to see full results. If you
                  don't achieve any results after consistent use of 12 weeks,
                  you have the right to claim our money-back guarantee. It is
                  very important that you use the product correctly as
                  instructed.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-bold text-xl">
                What is the 100% results guarantee?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base ">
                  We offer a risk-free Money-Back Guarantee if you have not
                  achieved any results after 12 weeks of use - no questions
                  asked!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

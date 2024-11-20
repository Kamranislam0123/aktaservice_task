"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, User, Truck, Heart, Menu, X } from "lucide-react"; // Added X for close button
import Image from "next/image";

function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 9,
    seconds: 13,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full">
      {/* Top promotional banner */}
      <div className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-[length:200%_200%] animate-gradient-x text-white py-1 px-4 text-center text-sm font-medium">
        <p className="flex items-center justify-center gap-2 text-[1.125rem]  font-bold">
          SAVE UP TO 56% WITH 4 FREE GIFTS
          <span className="flex gap-1 py-1 ml-2 items-center">
            <span className="bg-white text-[0.875rem] text-black px-[8px] py-[2px] flex flex-col rounded">
              {String(timeLeft.hours).padStart(2, "0")}
              <span className="text-[.5rem]">HR</span>
            </span>
            <span className="font-bold text-white">:</span>
            <span className="bg-white text-[0.875rem] text-black px-[8px] py-[2px] flex flex-col rounded">
              {String(timeLeft.minutes).padStart(2, "0")}
              <span className="text-[.5rem]">MIN</span>
            </span>
            <span className="font-bold text-white">:</span>
            <span className="bg-white text-[0.875rem] text-black px-[8px] py-[2px] flex flex-col rounded">
              {String(timeLeft.seconds).padStart(2, "0")}
              <span className="text-[.5rem]">SEC</span>
            </span>
          </span>
        </p>
      </div>

      {/* Main navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/shop"
                className="bg-[#FF6C84] text-white px-6 py-2 rounded-md font-medium"
              >
                SHOP
              </Link>
              <Link href="/about" className="font-bold">
                ABOUT
              </Link>
              <Link href="/reviews" className="font-bold">
                REVIEWS
              </Link>
              <Link href="/blog" className="font-bold">
                BLOG
              </Link>
            </div>

            {/* Logo */}
            <div className="mr-72">
              <Image
                src="/ForChics-Logo.png"
                width={200}
                height={63}
                alt="logo"
              />
            </div>

            {/* User and Cart Icons */}
            <div className="flex items-center gap-4">
              <Link href="/account" className="">
                <User className="w-6 h-6" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex m-2 items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-500"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
              <div className="flex justify-between items-center px-4 py-2">
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col items-center py-4 space-y-4">
                <Link href="/shop" className="font-bold">
                  SHOP
                </Link>
                <Link href="/about" className="font-bold">
                  ABOUT
                </Link>
                <Link href="/reviews" className="font-bold">
                  REVIEWS
                </Link>
                <Link href="/blog" className="font-bold">
                  BLOG
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom banner */}
      <div className="bg-[#FF6C84] text-white py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-base font-bold">
          <div className="flex text-[1rem] items-center gap-2">
            <Truck className="w-5 h-5" />
            Free Shipping Today
          </div>
          <div className="flex text-[1rem] items-center gap-2">
            <Heart className="w-5 h-5" />
            72,500+ Happy Babes
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuTabs from "./MenuTabs";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href={"/"} className="flex items-center space-x-3 py-4">
            <FaShoppingCart className="text-3xl text-[#f76411]" />
            <div className="font-bold">
              <span className="text-3xl font-bold text-[#f23e14]">S</span>
              <span className="text-2xl font-semibold text-orange-600">an</span>
              <span className="text-3xl font-bold text-gray-800">C</span>
              <span className="text-2xl font-semibold text-gray-800">
                omerce
              </span>
            </div>
          </Link>
          <div className="flex items-center space-x-8 py-4">
            <Link
              href={"/"}
              className={`font-bold text-xl ${
                pathname === "/" ? "text-[#f23e14]" : "text-black"
              }`}
            >
              Home
            </Link>
            <div className="relative group py-4">
              <button className="text-black font-bold text-xl flex items-center gap-2">
                Categories <MdOutlineKeyboardArrowDown className="text-2xl" />
              </button>
              <div className="absolute w-[800px] bg-white rounded shadow-md hidden group-hover:block">
                <MenuTabs />
              </div>
            </div>
          </div>
          <Link
            href={"/offers"}
            className={`py-4 font-bold text-xl ${
              pathname === "/offers" ? "text-[#f76411]" : "text-black"
            }`}
          >
            Offers
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              className="pl-10 pr-4 py-2 border text-black bg-gray-100 rounded-full focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

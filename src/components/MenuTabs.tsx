"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
type TabName = "Men" | "Women" | "Kids";
type TabData = {
  [key in TabName]: {
    clothing: string[];
    shoes: string[];
    accessories: string[];
    image: string;
  };
};

const tabData: TabData = {
  Men: {
    image: "/men-cover.jpg",
    clothing: ["Hoodeis & SweatShirts"],
    shoes: ["Running"],
    accessories: ["Bags & Backpacks"],
  },
  Women: {
    image: "/women-cover.jpg",
    clothing: ["Tops", "Jeans"],
    shoes: ["Heels", "Flats"],
    accessories: ["HandBags"],
  },
  Kids: {
    image: "/kids-cover.jpg",
    clothing: ["T-shirts"],
    shoes: ["Sneakers"],
    accessories: ["Hats"],
  },
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Men");
  const renderTabContent = () => {
    const data = tabData[activeTab];
    return (
      <div className="flex justify-between w-full py-3">
        <div className="flex justify-between space-x-8 p-4">
          <div className="w-[350px] relative h-[300px]">
            {data?.image ? (
              <Image
                src={data.image}
                alt="category"
                width={350}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            ) : (
              <p className="text-gray-500">No image available</p>
            )}
          </div>
          <div className="flex justify-normal space-x-8 w-full text-black">
            <div className="w-1/3">
              <h2 className="font-bold mb-4"> Clothing </h2>
              <ul>
                {data?.clothing?.map((item, index) => (
                  <li key={index} className="mb-2 text-md">
                    <Link href={`/products?category=${item?.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="font-bold mb-4"> Shoes </h2>
              <ul>
                {data?.shoes?.map((item, index) => (
                  <li key={index} className="mb-2 text-md">
                    <Link href={`/products?category=${item?.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="font-bold mb-4"> Accessories </h2>
              <ul>
                {data?.accessories?.map((item, index) => (
                  <li key={index} className="mb-2 text-md">
                    <Link href={`/products?category=${item?.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full">
      <div>
        <nav className="flex justify-center space-x-8 py-4 border-b">
          {(["Men", "Women", "Kids"] as TabName[]).map((tab) => {
            return (
              <button
                className={`text-black text-md font-bold ${
                  activeTab === tab
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </nav>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MenuTabs;

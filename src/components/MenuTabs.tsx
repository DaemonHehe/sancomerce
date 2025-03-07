import React, { useState } from "react";
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
  Men: { image: "", clothing: [], shoes: [], accessories: [] },
  Women: { image: "", clothing: [], shoes: [], accessories: [] },
  Kids: { image: "", clothing: [], shoes: [], accessories: [] },
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return <div>Menutabs</div>;
};

export default MenuTabs;

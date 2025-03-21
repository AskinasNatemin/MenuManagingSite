import React from "react";
import Footer from "./Footer.jsx";
import MenuHeader from "./MenuHeader.jsx";
import MenuOverView from "./MenuOverView.jsx";

const MenuContainer = () => {
  return (
    <div className="menuContainer flex-fill">
      <MenuHeader />
      <MenuOverView />
      <Footer />
    </div>
  );
};

export default MenuContainer;

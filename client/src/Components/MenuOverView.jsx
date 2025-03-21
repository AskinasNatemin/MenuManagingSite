import React, { useState } from "react";
import MenuSelector from './MenuSelector'
import '../Styles/MenuOverView.css'

const MenuOverView = () => {
  const [selectMenu, setSelectMenu] = useState();
  const handleMenuSelector = (menuItem) => {
    setSelectMenu(menuItem);
  };
  return (
    <div className="menu-container">
      <div className="menu-tabs">
        <button
          className={`tab ${selectMenu == "Foods" ? "active" : ""}`}
          onClick={() => {
            handleMenuSelector("Foods");
          }}
        >
          FOODS
        </button>
        <button
          className={`tab ${selectMenu == "Drinks" ? "active" : ""}`}
          onClick={() => {
            handleMenuSelector("Drinks");
          }}
        >
          DRINKS
        </button>
      </div>

      <div className="menu-content border border-2 rounded rounded-3">
        {!selectMenu && (
          <p>please select Drinks or Foods to add menu's </p>
        )}

        {selectMenu && <MenuSelector menu={selectMenu} />}
      </div>
    </div>
  );
};

export default MenuOverView;

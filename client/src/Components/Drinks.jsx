import React, { useEffect, useState } from "react";
import "../Styles/MenuItems.css";
import axios from "axios";
import AddingForm from "./AddingForm";

const Drinks = ({ menu }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddDrink = (newDrink) => {
    axios
      .post(`${import.meta.env.VITE_SERVER_APP_URL}/addMenuItem`, newDrink, menu)
      .then((res) => {
        console.log(res);
        getDrinkList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDrinkList = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_APP_URL}/menu/${menu}`)
      .then((res) => {
        setDrinkList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };
  useEffect(() => {
    getDrinkList();
  }, [menu]);

  return (
    <>
      <div className="menu-items">
        <div className="menu-items-header">
          <h2 className="menu-title">{menu.toUpperCase()}</h2>
          <button className="add-button" onClick={() => setOpenForm(true)}>
            Add
          </button>
        </div>

        {/* Display added drinks with a professional scrollbar */}
        <div className="menu-List  scrollbar">
          {drinkList.map((drink, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-top">
                <h3>{drink.menuItem}</h3>
                <p className="price">${drink.price}</p>
              </div>
              <div className="menu-bottom">
                <p className="description">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
        {drinkList.length === 0 ? (
          <p className="text-info">Please add your favourite drink</p>
        ) : (
          ""
        )}
      </div>

      {openForm && (
        <AddingForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddDrink}
        />
      )}
    </>
  );
};

export default Drinks;

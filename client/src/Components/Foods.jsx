import React, { useEffect, useState } from "react";
import axios from "axios";
import AddingForm from "./AddingForm.jsx";
import "../Styles/MenuItems.css";

const Food = ({ menu }) => {
  const [foodList, setFoodList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddFood = (newFood) => {
    axios
      .post(`${import.meta.env.VITE_SERVER_APP_URL}/addMenuItem`, newFood, menu)
      .then((res) => {
        console.log(res);
        getFoodList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFoodList = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_APP_URL}/menu/${menu}`)
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };

  useEffect(() => {
    getFoodList();
  }, [menu]);

  return (
    <div className="menu-items">
      <div className="menu-items-header">
        <h2 className="menu-title">{menu.toUpperCase()}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>
      </div>
      <div className="menu-List scrollbar">
        {foodList.map((food, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-top">
              <h3>{food.menuItem}</h3>
              <p className="price">${food.price}</p>
            </div>
            <div className="menu-bottom">
              <p className="description">{food.description}</p>
            </div>
          </div>
        ))}
      </div>

      {foodList.length === 0 && (
        <p className="text-info">Please add your favorite food</p>
      )}

      {openForm && (
        <AddingForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddFood}
        />
      )}
    </div>
  );
};

export default Food;

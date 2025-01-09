import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { ProductAssets } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <BreadCrumb />
      <div className="food-display-list">
        {ProductAssets.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                price={item.price}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

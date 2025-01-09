import React, { useContext } from "react";
import "./FoodItem.css";
import { DefaultAssets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={DefaultAssets.add}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={DefaultAssets.pluse}
              onClick={() => addToCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={DefaultAssets.remove}
              onClick={() => removeFromCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

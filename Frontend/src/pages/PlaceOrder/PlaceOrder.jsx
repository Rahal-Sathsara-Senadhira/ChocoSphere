import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="spacer"></div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multifields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Home No." />
          <input type="text" placeholder="Line 1" />
          <input type="text" placeholder="Line 2" />
          <input type="text" placeholder="Line 3" />
          <div className="multifields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="province" />
          </div>
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="place-order-right">
          <div className="cart-summery-content">
            <h2>Totals</h2>
            <div className="cart-summery-content-content subtotal">
              <p>Sub total</p>
              <span>
                <span>Rs </span>
                {60}
              </span>
            </div>
            <div className="cart-summery-content-content subtotal">
              <p>Delivery fee</p>
              <span>
                <span>Rs </span>
                {getTotalCartAmount()?50:0}
              </span>
            </div>
            <div className="cart-summery-content-content total">
              <p>Total</p>
              <span>
                <span>Rs </span>
                {getTotalCartAmount()}
              </span>
            </div>
            <div className="cart-button-holder">
              <button
                onClick={() => {
                  navigate("/PlaceOrder");
                }}
              >
                proceed to payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;

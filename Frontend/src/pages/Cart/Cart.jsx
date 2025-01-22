import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, ProductAssets,getTotalCartAmount, removeFromCart,url } = useContext(StoreContext);

const navigate = useNavigate()

  return (
    <>
      <div className="spacer"></div>

      <div className="cart">
        <div className="home-title home-title-1">
          <span>Cart</span>
          <h3>Bascket of Love</h3>
        </div>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-items-title">
              <p></p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />

            {ProductAssets.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs {item.price * cartItems[item._id]}</p>
                    <span
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                      className="cart-cross"
                    >
                      X
                    </span>
                  </div>
                );
              }
            })}
          </div>

          <div className="cart-summery">
            <div className="cart-summery-title">
              <p>Order Details</p>
            </div>
            <br />
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
                <button onClick={()=>{navigate('/PlaceOrder')}}>proceed to checkout</button>
              </div>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have Promo Code</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Enter your lucky code" />
                  <button>Submit code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

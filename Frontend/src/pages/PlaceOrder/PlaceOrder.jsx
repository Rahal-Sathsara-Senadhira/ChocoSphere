import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, ProductAssets, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homeNo: "",
    line1: "",
    line2: "",
    line3: "",
    zipcode: "",
    province: "",
    phone: "",
  });

  const getTotal = () => {
    let Deliveryfee = 50;

    let total = getTotalCartAmount();
    if (total > 0) {
      total = total + Deliveryfee;
    }
    return total;
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      ProductAssets.map((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });

      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotal(),
      };
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }

    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate('/cart')
      }else if(getTotalCartAmount()===0){
        navigate('/cart')
      }
    }, [token]);
  };

  return (
    <>
      <div className="spacer"></div>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multifields">
            <input
              type="text"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              placeholder="Last name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email address"
            required
          />
          <input
            type="text"
            name="homeNo"
            onChange={onChangeHandler}
            value={data.homeNo}
            placeholder="Home No."
            required
          />
          <input
            type="text"
            name="line1"
            onChange={onChangeHandler}
            value={data.line1}
            placeholder="Line 1"
            required
          />
          <input
            type="text"
            name="line2"
            onChange={onChangeHandler}
            value={data.line2}
            placeholder="Line 2"
            required
          />
          <input
            type="text"
            name="line3"
            onChange={onChangeHandler}
            value={data.line3}
            placeholder="Line 3"
          />
          <div className="multifields">
            <input
              type="text"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              placeholder="Zip Code"
              required
            />
            <input
              type="text"
              name="province"
              onChange={onChangeHandler}
              value={data.province}
              placeholder="province"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="place-order-right">
          <div className="cart-summery-content">
            <h2>Totals</h2>
            <div className="cart-summery-content-content subtotal">
              <p>Sub total</p>
              <span>
                <span>Rs </span>
                {getTotalCartAmount()}
              </span>
            </div>
            <div className="cart-summery-content-content subtotal">
              <p>Delivery fee</p>
              <span>
                <span>Rs </span>
                {getTotalCartAmount() ? 50 : 0}
              </span>
            </div>
            <div className="cart-summery-content-content total">
              <p>Total</p>
              <span>
                <span>Rs </span>
                {getTotal()}
              </span>
            </div>
            <div className="cart-button-holder">
              <button type="submit">proceed to payment</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;

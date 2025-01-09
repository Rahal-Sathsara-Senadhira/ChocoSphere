import React from "react";
import "./ExplorProducts.css";
import { MenuAssets } from "../../assets/assets";

const ExplorProducts = ({category,setCategory}) => {






  return (
    <div className="Explore-menu" id="explore-menu">
      <div className="explor-menu-list">
        {MenuAssets.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className={`explore-menu-list-item ${category===item.menu_name?"active":""}` } key={index}>
              <div>
                <div className="img-container">
                <img src={item.menu_image} alt="" />
                </div>
              </div>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorProducts;

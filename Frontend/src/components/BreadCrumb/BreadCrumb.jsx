import React from "react";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  return (
    <div>
      <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pictures</a>
        </li>
        <li>
          <a href="#">Summer 15</a>
        </li>
        <li>Italy</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;

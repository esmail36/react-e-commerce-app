import React from "react";
import "../styles/ShopCart.css";

const ShopCart = ({ list, handleItem }) => {
  if (list) {
    const { title, price, img } = list;
    const handleClick = () => {
      handleItem(list);
    };

    return (
      <div className="cards">
        <div className="image_box">
          <img className="imgbottle" src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Price: ${price}</p>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    );
  }
};

export default ShopCart;

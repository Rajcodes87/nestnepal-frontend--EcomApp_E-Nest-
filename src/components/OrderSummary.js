import React, { useState } from "react";

function OrderSummary(props) {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleBuyButtonClick = () => {
    setShowOrderSummary(true);
    setProductAdded(true);
  };
  
  const handlePlaceOrderClick = () => {
    setOrderPlaced(true);
  };

  return (
    <div>
      <button className="atc" onClick={handleBuyButtonClick}>Add to cart</button>
      {productAdded && <p class="addproduct">Product has been added to cart please enter the quantity to buy</p>}
      {showOrderSummary && (
        <div>
          <h2>Order Summary</h2>
          <p>Product Name: {props.productName}</p>
          <p>Price: {props.price}</p>
          <input class="enterquantity" type="number"  min="1" max="100" placeholder="1" required /> 
          <button class="placeorder" onClick={handlePlaceOrderClick}>Place Order</button>
        </div>
      )}
      {orderPlaced && <p class="done">DONE. your order is placed for further processing</p>}
    </div>
  );
}

export default OrderSummary;


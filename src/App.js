
import React, { useState, useEffect } from "react";
import "./App.css";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [nest, setNest] = useState([]);
  console.log(nest);

  useEffect(() => {
    estore();
  }, []);

  const estore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setNest(jsonData);
  };

  return (
    <>
      <h2> Welcome to E-NEST Shopping Site</h2>

      <div className="container">
        {nest.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>Price: ${values.price}</p>
                  <p>
                    {values.price > 50
                      ? "Product Quality: High"
                      : "Product Quality: Low"}
                  </p>
                </div>
                <img src={values.image} alt="images" />
                <button
                  className="btn"
                  onClick={() => setShowOrderSummary(true)}
                >
                  Get this Now
                </button>
                {showOrderSummary && (
                  <OrderSummary
                    productName={values.title}
                    price={values.price}
                    quantity={1}
                  />
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
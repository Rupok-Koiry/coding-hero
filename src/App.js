import React, { useState } from "react";

import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const getCartItem = (item) => {
    setCart((prevState) => {
      return [...prevState, item];
    });
  };
  return (
    <>
      <Header />
      <main className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-9 ">
              <Courses getCartItem={getCartItem} />
            </div>
            <div className="col-xxl-3">
              <Cart cart={cart} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

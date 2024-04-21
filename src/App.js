import React, { useState } from "react";

import Cart from "./component/Cart/Cart.js";
import Header from "./component/Header/Header.js";
import MedicineForm from "./component/MedicineForm/MedicineForm.js";
import ItemList from "./component/ItemList/ItemList.js";
import CartProvider from "./Store/CartProvider.js";

import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <MedicineForm />
      <ItemList />
      </CartProvider>
    
  );
}

export default App;
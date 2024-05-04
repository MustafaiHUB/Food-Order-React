import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import mainImg from "./assests/images/meals.jpg"
import classes from './components/Layout/Header/Header.module.css'
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import MealContextProvider from "./store/MealContextProvider";
// import Modal from "./components/Modal/Modal";

// import { MealContextProvider } from "./store/meal-context";
// import DUMMY_MEALS from "./components/Meals/dummy-meals";
function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  const handleOrderMeal = () => {
    console.log("Ordered...");
  }
  return (
    <MealContextProvider>
      {showModal && <Cart onShowModal={handleShowModal} onOrderMeal={handleOrderMeal} />}
      <Header onShowModal={handleShowModal} />
      <section className={classes['main-image']}>
        <img src={mainImg} alt="mainImg" />
      </section>
      <MealsSummary />
      <Meals />
    </MealContextProvider>
  );
}

export default App;

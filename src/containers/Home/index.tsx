import { useState, useEffect } from "react";
import { pizzas } from "../../data/Pizzas";

const HomeContainer = () => {
  const pizzaItems = [...pizzas];
  console.log(pizzaItems)
  return <div>HomeContainer</div>;
};

export default HomeContainer;

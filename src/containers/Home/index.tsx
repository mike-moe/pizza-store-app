import { useState, useEffect } from "react";
import { pizzas } from "../../data/Pizzas";
import { CardComponent } from "../../components/common";
import CoverImage from "../../assets/images/cover-one.jpg";

const HomeContainer = () => {
  const pizzaItems = [...pizzas];
  console.log(pizzaItems);
  return (
    <div>
      <div className="flex justify-center items-center  bg-gray-100">
        <div className="grid grid-cols-4 gap-4">
          {pizzas.map((pizza, index) => (
            <CardComponent key={index} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

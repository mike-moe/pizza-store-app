import { FaPlus } from "react-icons/fa";
import { CardProps } from "./Card.type";
import { useState } from "react";

const CardComponent = ({ pizza, key }: CardProps) => {
  const [orderCount, setOrderCount] = useState(0);

  const handleAddOrder = () => {
    setOrderCount(orderCount + 1);
  };
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4" key={key}>
      <img className="object-cover object-center w-full h-4/6" src={pizza.image} alt={pizza.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pizza.name}</div>
        <p className="text-gray-700 font-bold text-2xl font-mono">${pizza.price}</p>
      </div>
      <div className="px-6 py-4 flex flex-row justify-between items-center">
        <button
          onClick={handleAddOrder}
          className="bg-orange hover:outline hover:text-orange hover:bg-white  text-white shadow font-bold py-2 px-2 rounded flex flex-row justify-between items-center"
        >
          <FaPlus className="mx-2" /> <span>Add to Cart</span> 
        </button>
        {orderCount > 0 && (
          <div className="text-center items-center flex justify-center font-bold border-2 border-orange bg-white h-10 w-10 rounded-full">
            <p className="text-gray-600 ">{orderCount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;

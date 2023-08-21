import { memo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartItemHandler } from "../../../containers/Home/hooks";
import { CardProps } from "./Card.type";
import { useCheckout } from "../../../context/Checkout";

const CardComponent = memo(({ pizza, key, handleAddOrder,handleRemoveOrder, items }: CardProps) => {
  const pizzaItem = items.length > 0 && items?.filter((j) => j.id === pizza.id);
  console.log(items);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg md:m-4 bg-white hover:scale-105 transition-all cursor-pointer" key={key}>
      <img className="object-cover object-center scale-75 h-4/6" src={pizza.image} alt={pizza.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-md md:text-xl mb-2">{pizza.name}</div>
        <p className="text-gray-700  text-md md:text-2xl">${pizza.price}</p>
      </div>
      <div className="px-2 py-2 mb-8 md:mb-1 md:px-6 md:py-4 flex flex-row justify-between items-center">
        <button
          onClick={() => handleAddOrder(pizza)}
          className="bg-orange hover:outline hover:text-orange hover:bg-white  text-white shadow font-bold py-2 px-2 rounded flex flex-row justify-between items-center"
        >
          <FaPlus className="mx-2" />
        </button>

        {pizzaItem.length > 0 && (
          <div className="text-center items-center flex justify-center font-bold border-2 border-orange bg-white h-10 w-10 rounded-full">
            <p className="text-gray-600 ">{(pizzaItem.length > 0 && pizzaItem?.map((i) => i.quantity)) || null}</p>
          </div>
        )}
        {(pizzaItem.length > 0 && (
          <button
            onClick={() => handleRemoveOrder(pizza)}
            className="bg-white  hover:outline  text-orange   shadow font-bold py-2 px-2 rounded flex flex-row justify-between items-center"
          >
            <FaMinus className="mx-2" />
          </button>
        )) ||
          null}
      </div>
    </div>
  );
});

export default CardComponent;

import { CardComponent } from "../../components/common";
import { useCheckout } from "../../context/Checkout";
import { pizzas } from "../../data/Pizzas";
import { useCartItemHandler } from "./hooks";

const HomeContainer = () => {
  const { handleAddOrder, handleRemoveOrder } = useCartItemHandler();
  const { items } = useCheckout();

  return (
    <div>
      <div className="flex flex-grow  justify-center items-center p-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pizzas.map((pizza, index) => (
            <CardComponent key={index} pizza={pizza} handleAddOrder={handleAddOrder} handleRemoveOrder={handleRemoveOrder} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

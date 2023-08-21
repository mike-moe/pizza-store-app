import { useCheckout } from "../../../context/Checkout";

export const useCartItemHandler = () => {
  const { addItem, removeItem, items } = useCheckout();
  const handleAddOrder = (pizza: any) => {
    const item = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    };
    addItem(item);
  };
  const handleRemoveOrder = (pizza: any) => {
    const item = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    };
    removeItem(item);
  };
  return { handleAddOrder, handleRemoveOrder };
};

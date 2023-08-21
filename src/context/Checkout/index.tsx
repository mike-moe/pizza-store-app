import { createContext, useState, useContext } from "react";
import { CheckoutContextProps, CheckoutItemsProp, CheckoutProp } from "./Checkout.type";

const CheckoutContext = createContext<CheckoutItemsProp | CheckoutProp>({} as CheckoutProp);

export const CheckoutProvider = ({ children }: CheckoutContextProps) => {
  const [items, setItems] = useState<CheckoutItemsProp[]>([]);
  const addItem = (item: CheckoutProp) => {
    const existItem = items.find((i) => i.id === item.id);
    if (existItem) {
      setItems(
        items.map((i) =>
          i.id === item.id
            ? {
                ...existItem,
                quantity: existItem?.quantity + 1,
                totalPrice: existItem?.totalPrice + item.price,
              }
            : i
        )
      );
    } else {
      setItems([
        ...items,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
        },
      ]);
    }
  };
  const removeItem = (item: CheckoutProp) => {
    const existItem = items.find((i) => i.id === item.id);
    console.log(existItem);
    if (existItem?.quantity === 1) {
      setItems(items.filter((i) => i.id !== item.id));
    } else {
      setItems(
        items.map((i) =>
          i.id === item.id
            ? {
                ...existItem,
                quantity: existItem.quantity - 1,
                totalPrice: existItem.totalPrice - item.price,
              }
            : i
        )
      );
    }
  };
  return <CheckoutContext.Provider value={{ items, addItem, removeItem }}>{children}</CheckoutContext.Provider>;
};
export const useCheckout = () => {
  return useContext(CheckoutContext);
};

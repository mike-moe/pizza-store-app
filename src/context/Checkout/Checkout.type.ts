export type CheckoutProp = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  quantity?: number;
  totalPrice?: number ;
  addItem: (item: CheckoutProp) => void;
  removeItem: (item: CheckoutProp) => void;
};
export type CheckoutItemsProp = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  totalPrice?: number;
};
export type CheckoutContextProps = {
  children?: React.ReactNode;
};

export type CardProps = {
  pizza: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  handleAddOrder: (pizza: any) => void;
  handleRemoveOrder: (pizza: any) => void;
  key: number;
  items: any;
};

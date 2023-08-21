import { useCheckout } from "../../context/Checkout";

const CheckoutContainer = () => {
  const { items } = useCheckout();
  console.log(items);
  if (items.length === 0)
    return (
      <div className="flex flex-grow   justify-center items-center p-28 mb-20 w-screen">
        <div className="bg-white h-full md:w-1/2 p-52 text-center">
          <h1 className="font-bold text-black text-3xl">The cart is empty</h1>
        </div>
      </div>
    );
  return (
    <div>
      <div className="flex flex-grow   justify-center items-center p-28 mb-20 w-screen">
        <div className="bg-white md:w-1/2 min-h-96 p-8 relative">
          <h3 className="text-2xl font-semibold mb-2">Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="flex  items-center font-bold">
              <span className="my-2">{item.name}</span>
              <span className="flex-grow"></span>
              <span className="my-2">{item.quantity}X</span>
              <hr />
            </div>
          ))}
          <hr />
          <span className="font-bold text-black text-2xl my-4 block">
            Total: $ <span>{items.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</span>
          </span>
          <button className="bg-orange hover:outline hover:text-orange hover:bg-white  text-white shadow font-bold py-2 px-2 rounded flex flex-row justify-between items-center">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;

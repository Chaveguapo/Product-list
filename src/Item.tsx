import { useState } from "react";
import waffle from "./assets/Images/image-waffle-mobile.jpg";
import AddToCart from "./assets/icons/icon-add-to-cart.svg";
import increment from "./assets/icons/icon-increment-quantity.svg";
import decrement from "./assets/icons/icon-decrement-quantity.svg";

function App() {
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    setItemCount(itemCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  return (
    <>
      <div className="min-h-screen font-display bg-Rose_50 p-6 text-left ">
        <h1 className="font-bold  pb-6 text-3xl text-Rose_900">Desserts</h1>

        <div>
          <ul>
            <li
              className={
                "flex flex-col items-center pt-4border-4 border-Red border-none"
              }
            >
              <img
                src={waffle}
                className="rounded-lg"
                alt="waffle_with_berries"
              ></img>
              <div
                aria-label="Add to cart"
                className="relative z-30 border border-Red bottom-5 px-5 p-3 text-center text-sm font-bold text-Rose-900 rounded-full 
              bg-white text-Rose_900 flex gap-2 cursor-pointer "
              >
                <img src={AddToCart} />
                Add to Cart
              </div>
              <div
                aria-label="Count of items"
                className=" flex gap-6 relative align-middle z-30 rounded-full px-9 p-3 text-sm font-bold bg-Red text-white"
              >
                <img src={decrement} className="cursor-pointer" />
                <p>{itemCount}</p>
                <img src={increment} className="cursor-pointer" />
              </div>
            </li>
            <div className="p-2">
              <h3 className="text-sm text-Rose_400">Waffle</h3>
              <h2 className=" text-Rose_900 font-bold">Waffle with Berries</h2>
              <h2 className=" text-Red text-sm font font-bold">$2.30</h2>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

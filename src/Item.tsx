import { useState } from "react";
import waffle from "./assets/Images/image-waffle-mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [itemCount, setItemCount] = useState(0);

  // const handleAddToCart = () => {
  //   setItemCount(itemCount + 1);
  // };

  // const handleRemoveFromCart = () => {
  //   if (itemCount > 0) {
  //     setItemCount(itemCount - 1);
  //   }
  // };
  return (
    <>
      <div className="min-h-screen bg-Rose_50 p-6 text-left ">
        <h1 className="font-bold pb-6 text-3xl text-Rose_900">Desserts</h1>

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
              <button
                aria-label="Add to cart"
                className="relative z-30 border bottom-5 p-7 text-sm font-bold text-Rose-900 rounded-full py-3 
              bg-white text-Rose_900"
              >
                <FontAwesomeIcon icon={faCartPlus} className="px-3" />
                Add to Cart
              </button>

              <button
                aria-label="Count of items"
                className=" flex justify-between relative z-30 rounded-full px-14 p-3 text-sm font-bold bg-Red text-white"
              >
                <FontAwesomeIcon icon={faMinus} />
                <p>{itemCount}</p>
                <FontAwesomeIcon icon={faPlus} />
              </button>
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

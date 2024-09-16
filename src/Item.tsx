import { useState } from "react";
import waffle from "./assets/Images/image-waffle-mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [incart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart(!incart);
  };

  return (
    <>
      <div className="min-h-screen bg-Rose_50 p-6 text-left ">
        <h1 className="font-bold pb-6 text-3xl text-Rose_900">Desserts</h1>

        <div>
          <ul>
            <li className=" flex flex-col items-center pt-4 ">
              <img
                src={waffle}
                className="rounded-lg static"
                alt="waffle_with_berries"
              ></img>
              <button
                aria-label="Add to cart"
                className="relative z-30 border bottom-5 p-7 text-sm font-bold text-Rose-900 border- rounded-full py-3 border-Rose_300 bg-white active:bg-Red active:border-none focus:outline-none focus:text-Rose_50 focus:bg-Red"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="px-2 border-Red"
                />
                Add to Cart
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

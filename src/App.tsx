import "./App.css";
import waffle from "./assets/Images/image-waffle-mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="min-h-screen bg-Rose_50 p-5 text-left sm:text-left min-[375px]:text-center max-[1440px]">
        <h1 className="font-bold pb-6 text-3xl text-Rose_900">Desserts</h1>
        <div>
          <div className="relative flex flex-col items-center ">
            <img
              src={waffle}
              className="rounded-lg static"
              alt="waffle_with_berries"
            ></img>
            <button className="fixed z-90 bottom-20 p-8  text-sm font-medium text-Rose_900 border-2 rounded-full py-2 border-Rose_300 bg-white">
              Add to Cart
            </button>
          </div>
          <div className="pt-9">
            <h3 className="text-sm text-Rose_400">Waffle</h3>
            <h2 className=" text-Rose_900 font-medium text-base/6">
              Waffle with Berries
            </h2>
            <h2 className=" text-Red text-sm font font-bold">$2.30</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

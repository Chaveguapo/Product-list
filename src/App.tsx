import "./App.css";
import waffle from "./assets/Images/image-waffle-mobile.jpg";

function App() {
  return (
    <>
      <div className="min-h-screen bg-Rose_50 p-5 text-left ">
        <h1 className="font-bold pb-6 text-3xl text-Rose_900">Desserts</h1>
        <div>
          <div className=" flex flex-col items-center ">
            <img
              src={waffle}
              className="rounded-lg static"
              alt="waffle_with_berries"
            ></img>
            <button className="relative z-30 bottom-5 p-9 text-sm font-bold text-Rose_900 border-2 rounded-full py-2 border-Rose_300 bg-white">
              Add to Cart
            </button>
          </div>
          <div className="pt-1">
            <h3 className="text-sm text-Rose_400">Waffle</h3>
            <h2 className=" text-Rose_900 font-bold">Waffle with Berries</h2>
            <h2 className=" text-Red text-sm font font-bold">$2.30</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

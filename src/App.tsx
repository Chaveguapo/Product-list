import "./App.css";
import waffle from "./assets/Images/image-waffle-mobile.jpg";

function App() {
  return (
    <>
      <div className="container bg-Rose-300 p-5 text-left sm:text-left min-[375px]:text-left max-[1440px]">
        <h1 className="font-bold pb-6 text-3xl text-Rose_900">Desserts</h1>
        <div>
          <img
            src={waffle}
            className="rounded-lg"
            alt="waffle_with_berries"
          ></img>
          <a></a>
          <button className=" text-sm font-medium border-2 rounded-full px-7 py-2 border-Rose_300 ">
            Add to Cart
          </button>
          <h3 className=" text-sm text-Rose_400">Waffle</h3>
          <h2 className=" text-Rose_900 font-medium text-base/6">
            Waffle with Berries
          </h2>
          <h2>$2.30</h2>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;

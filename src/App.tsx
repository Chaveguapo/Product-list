import "./App.css";

function App() {
  return (
    <>
      <div className="p-5 text-left sm:text-left min-[375px]:text-left max-[1440px]">
        <h1 className="font-extrabold py-3">Dessert</h1>
        <div>
          <div>Image</div>
          <button>Add to Cart</button>
          <h3>Waffle</h3>
          <h2 className="font-medium text-base">Waffle with Berries</h2>
          <h2>$2.30</h2>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import bg from "./img/091aa731fce7a703e2dc.jpg";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="">
      <div
        className="md:h-full pb-7 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
        }}
      >
        <h5 className="text-3xl text-white md:px-14 px-3 pt-6">weather forecast</h5>
        <HomePage />
      </div>
    </div>
  );
}

export default App;

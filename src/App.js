import "./App.css";
import Filter from "./Filter";
import Products from "./Products";

function App() {
  return (
    <div className="container">
      <main>
        <Filter />
        <Products />
      </main>
    </div>
  );
}

export default App;

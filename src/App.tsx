import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(event) => setCategory(event.target.value)}
        className="form-select"
      >
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
      {/* <input ref={ref} type="text" className="form-control" /> */}
    </div>
  );
}
export default App;

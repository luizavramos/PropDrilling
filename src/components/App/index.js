import { useState } from "react";

import Products from "../Products";
import CashRegister from "../CashRegister";

import "./app.css";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      
      <main>
     
        <Products
          updateTotalPrice={(price) => setTotal(total + price)}
        />
        <CashRegister total={total} />
      </main>
    </div>
  );
}

export default App;
import "components/App/style.css";
import Header from "components/Header";
import Balance from "components/Balance";
import Expenses from "components/Expenses";
import { useState } from "react";

function App() {

  const [expenses] = useState([])

  return (
    <div>
      <Header />
      <Balance expenses={expenses} />
      <Expenses />
    </div>
  );
}

export default App;
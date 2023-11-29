import "components/App/style.css";
import Header from "components/Header";
import Balance from "components/Balance";
import Expenses from "components/Expenses";

function App() {

  return (
    <div>
      <Header />
      <Balance />
      <Expenses />
    </div>
  );
}

export default App;
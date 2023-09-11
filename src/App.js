import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    "client-id":
      "AeHkStbXnsaiYPgBU_QWIqPUK_ZzLXVBUHJP1F-tgMLvnAniBWS-TpLyrVl_WWUTMrmHWhRi-5lFeSn0",
    currency: "USD",
    intent: "capture",
    //"data-client-token": "abc123xyz=="
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <PayPalButtons />
        </header>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;

import "./App.css";
import { Button } from "react-bootstrap";
import { Header } from "./components";
import { Weather } from "./components/wether";

function App() {
  return (
    <div>
      <Header />
      <div className="container-sm text-bg-light" style={{ height: "100vh" }}>
        <Weather />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components";
import { Weather } from "./components/wether";

function App() {
  return (
    <div>
      <Header />
      <div className="container-sm text-bg-light">
        <Weather />
      </div>
    </div>
  );
}

export default App;

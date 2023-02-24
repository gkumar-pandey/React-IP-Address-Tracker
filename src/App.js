import "./App.css";
import HomePage from "./Pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <HomePage />
    </div>
  );
}

export default App;

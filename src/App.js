import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Roomm from "./component/Roomm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Roomm />} path="/room/:roomId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

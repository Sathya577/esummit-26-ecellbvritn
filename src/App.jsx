import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Speakers" element={<Speakers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import LoadingScreen from "./components/loadscreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loading screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Speakers" element={<Speakers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
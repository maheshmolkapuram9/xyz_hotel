import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Location from "./pages/Location";
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import InTheHotel from "./pages/InTheHotel";
import ThingsToDo from "./pages/ThingsToDo";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="location" element={<Location />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="inTheHotel" element={<InTheHotel />}  />
          <Route path="thingsToDo" element={<ThingsToDo />} />
          <Route path="gallery" element={<Gallery />} />
          <Route  path="*" element={<NoPage />} />
          <Route element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {Routes, Route} from "react-router-dom";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  )
}

export default App;

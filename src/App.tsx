import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from "./pages/shop/Shop";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Components from "./components/Components.jsx";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
          <Routes>
            <Route path="/" element={<Components />} />
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

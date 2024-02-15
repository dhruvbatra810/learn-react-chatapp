import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Chat from "./pages/chat";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="chat" element={<Chat />}></Route>
          <Route path="nice" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

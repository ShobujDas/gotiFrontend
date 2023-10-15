import "./App.css";
import Layout from "./component/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Signin from "./component/pages/auth/Signin";
import HomePage from "./component/pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/singin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup, Login, HomePage } from "./Pages";
import { NavBar } from "./Components";

function App() {
  return (
    <>
     <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup, Login, HomePage, RulesPage, Questions, Result } from "./Pages";
import { Footer, NavBar } from "./Components";
import { Toaster } from "react-hot-toast";

export const App: React.FC = () =>  {
  return (
    <>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/rules" element={<RulesPage />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;

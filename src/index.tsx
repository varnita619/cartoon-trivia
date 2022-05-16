import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, QuizContextProvider } from "./Context/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

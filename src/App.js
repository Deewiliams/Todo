import { Container } from "@mui/material";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Code from "./auth/Code";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/code" element={<Code />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </div>
      
  );
}

export default App;

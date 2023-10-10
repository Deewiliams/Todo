import { Container } from "@mui/material";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <CreateTodo /> */}
      {/* <Register /> */}
    </Container>
  );
}

export default App;

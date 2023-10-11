import { Container } from "@mui/material";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Code from "./auth/Code";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/code" element={<Code />} />
        <Route path="/main" element={<CreateTodo />} />
      </Routes>
      {/* <CreateTodo /> */}
      {/* <Register /> */}
    </Container>
  );
}

export default App;

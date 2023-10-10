import { Container } from "@mui/material";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
      {/* <CreateTodo /> */}
      {/* <Register /> */}
    </Container>
  );
}

export default App;

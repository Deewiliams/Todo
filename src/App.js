import { Container } from "@mui/material";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Register from "./auth/Register";

function App() {
  return (
    <Container>
      {/* <CreateTodo /> */}
      <Register />
    </Container>
  );
}

export default App;

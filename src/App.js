import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  return (
    <>
    <Routes>
    <Route path="/login" exact element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/home/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

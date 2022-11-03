import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/home/HomePage";
import Project from "@/project/Project";
import LeftNavibar from "@/common/navibar/LeftNavibar";
import InfoPage from "./info/InfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeftNavibar element={<HomePage />} />} />
        <Route path="/info" element={<LeftNavibar element={<InfoPage />} />} />
        <Route
          path="/project"
          element={<LeftNavibar element={<Project />} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

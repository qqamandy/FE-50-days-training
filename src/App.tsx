import { Route, Routes, BrowserRouter } from "react-router-dom";
import Clamp from "./day1/Clamp";
import HomaPage from "./Home/HomaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="/practice/1" element={<Clamp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

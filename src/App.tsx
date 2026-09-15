import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import StoriesPage from "./pages/StoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

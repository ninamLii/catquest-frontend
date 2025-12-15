import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllCats from "./pages/AllCats";
import Header from "./Header";
import Favourites from "./pages/Favourites";
import CatDetails from "./pages/CatDetails";
import CatQuestWizard from "./pages/CatQuestWizard";

function App() {
  return (
    <div className="text-gray-800">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<AllCats />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/catquest" element={<CatQuestWizard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

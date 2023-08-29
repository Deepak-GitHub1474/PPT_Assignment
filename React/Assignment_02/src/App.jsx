import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/PhotoGallery/Gallery";
import PhotoDetails from "./Components/PhotoGallery/PhotoDetails";
import NoPage from "./Components/PhotoGallery/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/photo/:id" element={<PhotoDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

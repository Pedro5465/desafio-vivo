import "./css/styles.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="*"
          element={
            <div className="container-erro">
              <h1>Página não encontrada!</h1>
              <Link className="link-to-error" to="/">
                Home
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

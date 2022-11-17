import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./index.css";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
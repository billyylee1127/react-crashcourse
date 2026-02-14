import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users"

function App() {
  

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;








//
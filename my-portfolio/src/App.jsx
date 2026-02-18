import Navbar from './components/Navbar.jsx';
// import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom'; 
import './index.css';
import About from './pages/About.jsx';
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./components/Projects.jsx";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
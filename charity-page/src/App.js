import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

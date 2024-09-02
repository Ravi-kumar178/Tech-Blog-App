import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SingleBlog from "./Pages/SingleBlog";

function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/blogs" element= {<Blogs/>}/>
       <Route path="/services" element= {<Services/>}/>
       <Route path="/about" element= {<About/>}/>
       <Route path="/contact" element= {<Contact/>}/>
       <Route path="/blogs/:id" element={<SingleBlog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

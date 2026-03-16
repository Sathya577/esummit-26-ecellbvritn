<<<<<<< HEAD
import UnicornBackground from "../components/UnicornBackground";
import ModelScene from "../components/ModelScene";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="hero">
      <Navbar />
      
      <div className="bg">
        <UnicornBackground />
      </div>

      <div className="model">
        <ModelScene />
      </div>
 <div className="hero-text">
  
        <img src="/bvrit_logo1.png" alt="E-Summit Logo" className="hero-logo" />
        <p className="hero-sub">JOIN THE INNOVATION</p>

        <h1 className="hero-title">
          <span className="white">E</span>SUMMIT<span className="date">'26</span>
          
        </h1>
        <p className="hero-version">SUMMER EDITION</p>

        <div className="hero-buttons">

        <a 
  href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hero-btn">Know More</button>
</a>

<Link to="/events">
  <button className="hero-btn">Register Now</button>
</Link>

        </div>

      </div>
      <div className="hero-dates">
  <span>25 — 26 </span>MARCH
</div>

<div className="hero-bottom-text">
  WHERE INNOVATORS <span>BUILD THE FUTURE</span>
</div>

     
      <div className="watermark-cover"></div>

    </div>
  );
=======
import UnicornBackground from "../components/UnicornBackground";
import ModelScene from "../components/ModelScene";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="hero">
      <Navbar />
      
      <div className="bg">
        <UnicornBackground />
      </div>

      <div className="model">
        <ModelScene />
      </div>
 <div className="hero-text">
  
        <img src="/bvrit_logo1.png" alt="E-Summit Logo" className="hero-logo" />
        <p className="hero-sub">JOIN THE INNOVATION</p>

        <h1 className="hero-title">
          <span className="white">E</span>SUMMIT<span className="date">'26</span>
          
        </h1>
        <p className="hero-version">SUMMER EDITION</p>

        <div className="hero-buttons">

        <a 
  href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hero-btn">Know More</button>
</a>

<Link to="/events">
  <button className="hero-btn">Register Now</button>
</Link>

        </div>

      </div>
      <div className="hero-dates">
  <span>25 — 26 </span>MARCH
</div>

<div className="hero-bottom-text">
  WHERE INNOVATORS <span>BUILD THE FUTURE</span>
</div>

     
      <div className="watermark-cover"></div>

    </div>
  );
>>>>>>> f28f9da7251204656258f8394977c7a1fc1d019a
}
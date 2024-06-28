import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <div className="navlink">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="signup">
          Sign up
        </a>
        {/* =======For Mobile Menu ========= */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/signin">Sign in</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

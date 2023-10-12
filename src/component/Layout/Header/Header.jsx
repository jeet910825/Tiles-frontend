import React, { useState ,useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Clear } from "@mui/icons-material";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add an event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled":""}`}>
      <div className="nav-brand">
        <h1>Pooja tiles</h1>
      </div>
      <div className={`nav-link ${toggle ? "active" : ""} ${scrolled ?"scrolled":""}`}>
        <Link>Home</Link>
        <Link>Product</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>
      <div onClick={() => setToggle(!toggle)} className="toggle-button">
        {toggle ? <Clear /> : <MenuIcon />}
      </div>
    </div>
  );
}

export default Header;

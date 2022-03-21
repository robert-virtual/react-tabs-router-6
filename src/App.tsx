import { CSSProperties, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Products, Home, About, Contact } from "./pages";

interface StyleProps {
  isActive: boolean;
}

function App() {
  const [sliderLeft, setSliderLeft] = useState(0);

  function navLinkStyle(left: number) {
    return ({ isActive }: StyleProps): CSSProperties => {
      useEffect(() => {
        if (isActive) {
          setSliderLeft(left * 100);
        }
      }, [isActive]);

      return {
        width: 100,
        textAlign: "center",
        textDecoration: "none",
        color: "white",
      };
    };
  }
  return (
    <>
      <nav
        style={{
          position: "relative",
          backgroundColor: "#333",
          height: "6vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink style={navLinkStyle(0)} to={"/"}>
          Home
        </NavLink>
        <NavLink style={navLinkStyle(1)} to={"/products"}>
          Products
        </NavLink>
        <NavLink style={navLinkStyle(2)} to={"/contact"}>
          Contact
        </NavLink>
        <NavLink style={navLinkStyle(3)} to={"/about"}>
          About
        </NavLink>
        <div
          style={{
            width: 100,
            height: 3,
            backgroundColor: "blueviolet",
            position: "absolute",
            left: sliderLeft,
            bottom: 0,
            transition: "all 0.5s",
          }}
        ></div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

import {
  CSSProperties,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Products, Home, About, Contact } from "./pages";
import { motion } from "framer-motion";

interface StyleProps {
  isActive: boolean;
}

function App() {
  const [tip, setTip] = useState("");
  const [icon, setIcon] = useState<FC>(() => (
    <svg
      style={{ width: "2rem" }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ));
  const [left, setLeft] = useState(0);
  const [tipLeft, setTipLeft] = useState(0);
  const [tipOpacity, setTipOpacity] = useState(0);

  const mouseOver = (v: number, tip: string, i?: FC) => {
    const f: MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (i) {
        setIcon(i);
      }
      setTip(tip);
      setTipLeft(v * 100);
      setTipOpacity(1);
    };
    return f;
  };

  const mouseLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setTipOpacity(0);
  };
  function navLinkStyle(value: number) {
    return ({ isActive }: StyleProps): CSSProperties => {
      useEffect(() => {
        if (isActive) {
          setLeft(value * 100);
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
        <NavLink
          onMouseOver={mouseOver(0, "Home", () => (
            <svg
              style={{ width: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          ))}
          onMouseLeave={mouseLeave}
          style={navLinkStyle(0)}
          to={"/"}
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          onMouseLeave={mouseLeave}
          onMouseOver={mouseOver(1, "Products", () => (
            <svg
              style={{ width: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          ))}
          style={navLinkStyle(1)}
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          onMouseLeave={mouseLeave}
          onMouseOver={mouseOver(2, "Contact", () => (
            <svg
              style={{ width: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          ))}
          style={navLinkStyle(2)}
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          onMouseLeave={mouseLeave}
          onMouseOver={mouseOver(3, "About", () => (
            <svg
              style={{ width: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ))}
          style={navLinkStyle(3)}
          to={"/about"}
        >
          About
        </NavLink>

        <motion.div
          animate={{ left }}
          style={{
            width: 100,
            height: 3,
            backgroundColor: "blueviolet",
            position: "absolute",
            bottom: 0,
          }}
        ></motion.div>

        <motion.div
          style={{
            position: "absolute",
            top: 50,
            backgroundColor: "blueviolet",
            width: 200,
            padding: 10,
            color: "white",
            borderRadius: 5,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: tipOpacity, left: tipLeft + 10 }}
        >
          {icon}
          <h2>{tip}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            itaque harum culpa. Ut quibusdam architecto commodi hic,
            accusantium, non laudantium quidem reprehenderit corrupti sequi
            quaerat a adipisci officiis nihil ab.
          </p>
        </motion.div>
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

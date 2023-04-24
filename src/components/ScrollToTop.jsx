import React from "react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [backToTopButtom, setBackTopButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);
  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButtom && (
        <button className="scroll-up" onClick={scrollUp}>
          <i className="bi bi-arrow-up-square"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
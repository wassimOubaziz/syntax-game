import "./AppContainer.css";
import { useEffect } from "react";

// Component imports
import SyntaxSprint from "../SyntaxSprint/SyntaxSprint";
import Header from "../Header/Header";



const AppContainer = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <>
      <div className="window-container">        
        <div className="game-wrapper">
          <Header />
          <SyntaxSprint />
        </div>
        <footer>
          <button className="made-by">
            Made by{" "}
            <a
              href="https://www.github.com/wassimoubaziz"
              target="_blank"
              className="footer-link"
            >
              Wassim Oubaziz
            </a>
          </button>
        </footer>
      </div>
    </>
  );
};

export default AppContainer;

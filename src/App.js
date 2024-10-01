// src/App.js
import React from "react";
import "./App.css";
let title = "Welcome to my first react web page";

function App() {
  return (
    <div className="container">
      <header className="app-header">
        {title}

        <nav className="nav-text">
          <li>Home</li>
          <li>About</li>
          <li> Contact Us</li>
        </nav>
        <button>Click Me</button>
      </header>

      <main className="body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae?
          Eius impedit ipsum laboriosam, asperiores, dolor, soluta dolorum
          aliquam distinctio pariatur sunt sit fugit. Quisquam aliquam
          voluptatem ea ducimus ex esse eos?
        </p>
      </main>
    </div>
  );
}

export default App;

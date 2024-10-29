// src/App.jsx

import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import FounderListItem from "./componets/FounderListItem/FounderListItem";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        <FounderListItem name="Elizabeth Holmes" title="CEO" company="Razor" />
        <FounderListItem
          name="Sam Bankman-Fried"
          title="CFO"
          company="Toyota"
        />
        <FounderListItem name="Matt Damon" title="CMO" company="Hollywood" />
      </ul>
    </>
  );
};

export default App;

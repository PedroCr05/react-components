// src/App.jsx

import "./App.css";
import Navbar from "./componets/Navbar/Navbar";
import FounderListItem from "./componets/FounderListItem/FounderListItem";

const App = () => {
  // This is our information that would probably be getting from the database but point is that this is how we make our code shorter
  // We call our array of objects for each item and providing them their tags.
  // With these tags we use the dot notation to be accesed by by react
  const founders = [
    {
      name: "Elizabeth Holmes",
      title: "CEO",
      credential: "MBA from SuperLegit University",
      id: 1,
    },
    {
      name: "Sam Bankman-Fried",
      title: "CFO",
      credential: "CPA from TotallyReal State",
      id: 2,
    },
    {
      name: "Matt Damon",
      title: "CMO",
      credential: "Was in that movie you saw",
      id: 3,
    },
  ];

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
        {founders.map((founder) => (
          <FounderListItem
            // These keys are using dot notation from getting the array from `founders`, but in order to achieve this.
            // We are using `.map(variableName)` to get this information
            key={founder.id}
            name={founder.name}
            title={founder.title}
          />
          // <FounderListItem
          //   name="Pedro Cruz"
          //   title="Staff Member"
          //   company="Erewhon"
          // />
          // This is method two. Without a database we are forcing tags onto the same line of code
          // Though the issue is that there will be a lot of repetition and debugging this would be rough but either or method works
        ))}
      </ul>
    </>
  );
};

export default App;

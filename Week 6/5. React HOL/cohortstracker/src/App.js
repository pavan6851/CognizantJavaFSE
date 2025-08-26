import React from "react";
import CohortDetails from "./components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React Bootcamp",
      startDate: "2025-07-01",
      endDate: "2025-08-01",
      status: "ongoing"
    },
    {
      name: "Java Fundamentals",
      startDate: "2025-05-01",
      endDate: "2025-06-01",
      status: "completed"
    }
  ];

  return (
    <div>
      <h2>My Academy Cohorts</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

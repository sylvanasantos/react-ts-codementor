import React from "react";

import { SyllabusHeader } from "./components/SyllabusHeader";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <SyllabusHeader
        isPro={true}
        courseType="Skill Path"
        courseName="Analyze Data with Python"
        onClick={() => console.log("hello")}
        projects={14}
      />
    </div>
  );
};

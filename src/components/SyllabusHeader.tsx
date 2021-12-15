import React from "react";

export const SyllabusHeader = (props) => {
  const { isPro, courseType, courseName, onClick, projects } = props;

  return (
    <>
      <div className="flex-box">
        {isPro && <b>PRO</b>}
        <p>{courseType}</p>
      </div>
      <h1>{courseName}</h1>
      {projects && <h4>{projects} Projects</h4>}
      <button onClick={onClick}>Start</button>
    </>
  );
};

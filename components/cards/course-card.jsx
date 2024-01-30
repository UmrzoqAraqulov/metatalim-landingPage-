import React from "react";
import "./cards.css"

const CourseCard = ({ title, desc }) => {
  return (
    <div className="course-box">
      <h3 className="box-title">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default CourseCard;

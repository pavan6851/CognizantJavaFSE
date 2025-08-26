import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' },
  ];

  return (
    <div className="course-details">
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;

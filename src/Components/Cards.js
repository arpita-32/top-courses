import React from 'react';
import Card from './Card';

const Cards = ({ courses, category, likedCourses, setLikedCourses }) => {
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      allCourses = allCourses.concat(courseCategory);
    });
    return allCourses.filter(
      (course) => category === "All" || course.category === category
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;

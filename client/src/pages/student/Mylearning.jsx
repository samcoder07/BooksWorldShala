import React from "react";
import Course from "./Course";

const Mylearning = () => {
  const isLoading = false;
  const myLearningCourses = [1, 2, 3];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl ">My Learning</h1>
      <div className="my-5">
        {isLoading ? (
          <MylearningSkeleton />
        ) : myLearningCourses.length === 0 ? (
          <p>You are not enrolled in any of the courses</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2].map((course, index) => (
              <Course key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mylearning;

const MylearningSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {isLoading
      ? Array.from({ length: 8 }).map((_, index) => (
          <CourseSkeleton key={index} />
        ))
      : courses.map((course, index) => <Course key={index} />)}
  </div>
);

import React from "react";
import { useSelector } from "react-redux";

const InstructorComponent = () => {
  const instructors = useSelector((state) => state.instructor.instructor);
  const renderList = instructors?.map((instructor) => {
    const { _id, name, bio, kindOfInstructor, photo } = instructor;

    return (
      <div className="four wide column" key={_id} style={{ marginTop: "1vh" }}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={photo} alt={name} />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="meta">{kindOfInstructor}</div><br/>
              <div className="meta">{bio}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default InstructorComponent;

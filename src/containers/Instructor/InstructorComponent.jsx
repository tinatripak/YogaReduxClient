import React from "react";
import { useSelector } from "react-redux";

const InstructorComponent = () => {
  const instructors = useSelector((state) => state.instructor.instructor);
  const renderList = instructors?.map((instructor) => {
    const { _id, name, bio, kindOfInstructor, photo } = instructor;

    return (
      <div key={_id} style={{ paddingTop: "6vh" }}>
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img src={photo} alt={name} />
                </div>
                <div className="column rp">
                  <h1>{name}</h1>
                  <h2>
                    <a className="ui label">{kindOfInstructor}</a>
                  </h2>
                  <p>{bio}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default InstructorComponent;

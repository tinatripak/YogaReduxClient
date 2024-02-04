import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanComponent = () => {
  const plans = useSelector((state) => state.allPlans.plans);
  const renderList = plans?.map((plan) => {
    const { _id, name, photo, description, price } = plan;

    return (
      <div
        key={_id}
        style={{
          paddingTop: "4vh",
          paddingLeft: "2px",
          paddingRight: "2px",
          margin: "0 auto",
        }}
      >
        <Link to={`/plan/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  src={photo}
                  alt={name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="content" style={{ height: "17vh" }}>
                <div className="header">{name}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{description}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default PlanComponent;

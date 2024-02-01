import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedPlan,
  selectedPlan,
} from "../../redux/actions/productsActions";
import { IoIosArrowBack } from "react-icons/io";


const PlanDetails = () => {
  const { planId } = useParams();
  let plan = useSelector((state) => state.plan);
  const navigate = useNavigate();

  const { name, photo, description, price } = plan;
  const dispatch = useDispatch();
  const fetchPlanDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:4000/plan/getPlanById/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedPlan(response.data.data));
  };

  useEffect(() => {
    if (planId && planId !== "") fetchPlanDetail(planId);
    return () => {
      dispatch(removeSelectedPlan());
    };
  }, [planId]);
  return (
    <>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size={30}/> Back
        </button>
      </div>
      <div className="ui grid container" style={{ marginTop: "1vh" }}>
        {Object.keys(plan).length === 0 ? (
          <div>...Loading</div>
        ) : (
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
                    <a className="ui teal tag label">{price}</a>
                  </h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlanDetails;

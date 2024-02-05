import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedPlan,
  selectedPlan,
} from "../../redux/actions/productsActions";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../ConditionalRender/ConditionalRender";

const PlanDetails = () => {
  const { planId } = useParams();
  const plan = useSelector((state) => state.plan);
  console.log(plan);
  const navigate = useNavigate();
  const [isLoadedPlanDetails, setIsLoadedPlanDetails] = useState(false);
  const { name, photo, description, price } = plan;

  const dispatch = useDispatch();

  const fetchPlanDetail = async (id) => {
    const response = await axios
      .get(`https://yoga-redux.onrender.com/plan/getPlanById/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedPlan(response.data.data));
    setIsLoadedPlanDetails(true);
  };

  useEffect(() => {
    if (planId && planId !== "") fetchPlanDetail(planId);
    setIsLoadedPlanDetails(true);

    return () => {
      dispatch(removeSelectedPlan());
    };
  }, [planId]);

  return (
    <ConditionalRender
      conditions={[isLoadedPlanDetails]}
      content={
        <>
          <div className="buttons">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>
          <div
            className="ui grid container"
            style={{ marginTop: "1vh", paddingTop: "6vh" }}
          >
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
      }
    />
  );
};

export default PlanDetails;

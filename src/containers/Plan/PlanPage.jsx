import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlans } from "../../redux/actions/productsActions";
import PlanComponent from "./PlanComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../ConditionalRender/ConditionalRender";

const Plan = () => {
  useSelector((state) => state.allPlans.plans);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadedPlan, setIsLoadedPlan] = useState(false);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://yoga-redux.onrender.com/plan/getPlans")
      .then(() => {
        setIsLoadedPlan(true);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPlans(response.data.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ConditionalRender
      conditions={[isLoadedPlan]}
      content={
        <>
          <div className="buttons">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>
          <div className="ui grid container">
            <PlanComponent />
          </div>
        </>
      }
    />
  );
};

export default Plan;

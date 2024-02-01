import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlans } from "../../redux/actions/productsActions";
import PlanComponent from "./PlanComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Plan = () => {
  useSelector((state) => state.allPlans.plans);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://yoga-redux.onrender.com/plan/getPlans")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPlans(response.data.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size={30}/> Back
        </button>
      </div>
      <div className="ui grid container">
        <PlanComponent />
      </div>
    </>
  );
};

export default Plan;

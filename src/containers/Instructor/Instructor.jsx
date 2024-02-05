import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorComponent from "./InstructorComponent";
import { setInstructor } from "../../redux/actions/productsActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../ConditionalRender/ConditionalRender";

const Instructor = () => {
  useSelector((state) => state.instructor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadedInstructor, setIsLoadedInstructor] = useState(false);

  const fetchInstructor = async () => {
    const response = await axios
      .get("https://yoga-redux.onrender.com/instructor/getInstructors")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setInstructor(response.data.data));
    setIsLoadedInstructor(true);
  };

  useEffect(() => {
    fetchInstructor();
  }, []);

  return (
    <ConditionalRender
      conditions={[isLoadedInstructor]}
      content={
        <>
          <div className="buttons">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>

          <div className="ui grid container">
            <InstructorComponent />
          </div>
        </>
      }
    />
  );
};

export default Instructor;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../../redux/actions/productsActions";
import VideoComponent from "./VideoComponent";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../ConditionalRender/ConditionalRender";

const Video = () => {
  useSelector((state) => state.allVideos.videos);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoadedVideo, setIsLoadedVideo] = useState(false);
  const [isLoadedInstructor, setIsLoadedInstructor] = useState(false);

  const fetchVideo = async () => {
    const videosResponse = await axios
      .get("https://yoga-redux.onrender.com/video/getVideos")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setIsLoadedVideo(true);
    const videosWithInstructors = await Promise.all(
      videosResponse?.data?.data.map(async (video) => {
        const instId = video?.instructorId;
        const instructorResponse = await axios.get(
          `https://yoga-redux.onrender.com/instructor/getInstructorById/${instId}`
        );

        const instructorData = instructorResponse?.data?.data;
        const videoWithInstructor = {
          ...video,
          instructorName: instructorData?.name,
        };
        return videoWithInstructor;
      })
    );
    dispatch(setVideos(videosWithInstructors));
    setIsLoadedInstructor(true);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <ConditionalRender
      conditions={[isLoadedInstructor, isLoadedVideo]}
      content={
        <>
          <div className="buttons">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>
          <div className="ui grid container">
            <VideoComponent />
          </div>
        </>
      }
    />
  );
};

export default Video;

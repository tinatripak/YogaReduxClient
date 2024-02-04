import { ActionTypes } from "../constants/action-types";

export const setInstructor = (instructor) => {
  return {
    type: ActionTypes.SET_INSTRUCTOR,
    payload: instructor,
  };
};

export const selectedInstructor = (instructor) => {
  return {
    type: ActionTypes.SELECTED_INSTRUCTOR,
    payload: instructor,
  };
};

export const setPlans = (allPlans) => {
  return {
    type: ActionTypes.SET_PLANS,
    payload: allPlans,
  };
};

export const selectedPlan = (plan) => {
  return {
    type: ActionTypes.SELECTED_PLANS,
    payload: plan,
  };
};
export const removeSelectedPlan = () => {
  return {
    type: ActionTypes.REMOVE_PLANS,
  };
};

export const setVideos = (allVideos) => {
  return {
    type: ActionTypes.SET_VIDEOS,
    payload: allVideos,
  };
};

export const selectedVideo = (video) => {
  return {
    type: ActionTypes.SELECTED_VIDEOS,
    payload: video,
  };
};
export const removeSelectedVideo = () => {
  return {
    type: ActionTypes.REMOVE_VIDEOS,
  };
};

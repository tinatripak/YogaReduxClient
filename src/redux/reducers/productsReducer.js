import { ActionTypes } from "../constants/action-types";
const intialState = {
  instructor: [],
  plans: [],
  videos: [],
};

export const instructorReducer = (
  state = intialState.instructor,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_INSTRUCTOR:
      return { ...state, instructor: payload };
    default:
      return state;
  }
};

export const plansReducer = (state = intialState.plans, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PLANS:
      return { ...state, plans: payload };
    default:
      return state;
  }
};

export const selectedPlanReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PLANS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PLANS:
      return {};
    default:
      return state;
  }
};

export const videosReducer = (
  state = intialState.videos,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_VIDEOS:
      return { ...state, videos: payload };
    default:
      return state;
  }
};

export const selectedVideoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_VIDEOS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_VIDEOS:
      return {};
    default:
      return state;
  }
};

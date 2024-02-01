import { combineReducers } from "redux";
import { instructorReducer, plansReducer, selectedPlanReducer, videosReducer, selectedVideoReducer} from "./productsReducer";


const reducers = combineReducers({
  instructor: instructorReducer,
  allPlans: plansReducer,
  plan: selectedPlanReducer,
  allVideos: videosReducer,
  video: selectedVideoReducer,

});

export default reducers;

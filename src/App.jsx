import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plan from "./containers/Plan/PlanPage";
import PlanDetails from "./containers/Plan/PlanDetails";
import Instructor from "./containers/Instructor/Instructor";
import VideoDetails from "./containers/Video/VideoDetails";
import Video from "./containers/Video/Video";
import General from "./containers/Genelar";
import NoPage from "./containers/NoPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<General />} />
        <Route path="plans" element={<Plan />} />
        <Route path="plan/:planId" element={<PlanDetails />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="videos" element={<Video />} />
        <Route path="video/:videoId" element={<VideoDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoComponent = () => {
  const videos = useSelector((state) => state.allVideos.videos);
  const renderList = videos?.map((video_) => {
    const { _id, name, instructorName, duration, level, video } = video_;

    return (
      <div
        key={_id}
        style={{
          paddingTop: "4vh",
          margin: "0 auto",
          gap: "30px",
          paddingLeft: "2px",
          paddingRight: "2px",
        }}
      >
        <Link to={`/video/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta">{duration}</div>
                <div className="meta">Level: {level}</div>
                <div className="meta">{instructorName}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default VideoComponent;

import React from "react";
import "./styles.scss";

const YoutubeEmbed: React.FC<{ embed: string }> = ({ embed }) => {
  return (
    <div className="video-responsive">
      <iframe
        className="z-10"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embed}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    // <div className="z-10">
    //   <iframe
    //     className="z-10"
    //     width="853"
    //     height="480"
    //     frameBorder={0}
    //     style={{ width: "853px", height: "480px" }}
    //     src={`https://www.youtube.com/embed/${embed}`}
    //   ></iframe>
    // </div>
  );
};

export default YoutubeEmbed;

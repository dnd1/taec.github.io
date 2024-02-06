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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;

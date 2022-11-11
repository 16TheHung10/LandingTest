import React, { forwardRef, useRef, useState } from "react";
import { VideoWrapper } from "./styled";
import video from "../../assets/video/promo_video.png";

function Video() {
  return (
    <VideoWrapper className="video">
      <div className="content">
        <div className="content_video">
          <div className="video_intro">
            <img src={video} alt="video" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </VideoWrapper>
  );
}
export default forwardRef(Video);
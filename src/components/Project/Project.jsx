import React, { forwardRef, useRef, useState } from "react";
import { ProjectWrapper } from "./styled";
import video from "../../assets/project/video.png"

function Project() {
  return (
    <ProjectWrapper className="project">
      <div className="content">
        <div className="content_left">
          <h1 className="content_title">Be the owner of</h1>
          <h3 className="content_t">POOLS Phone project</h3>
        </div>

        <div className="content_video">
          <img src={video} alt="video" width="100%" height="100%" />
        </div>
      </div>
    </ProjectWrapper>
  );
}
export default forwardRef(Project);

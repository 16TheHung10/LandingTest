import React, { forwardRef, useRef, useState } from "react";
import { ConsumeWrapper } from "./styled";
import img from "../../assets/consume/img.png";

function Consume() {
  return (
    <ConsumeWrapper className="consume">
      <div className="content">
        <div className="content_text">
          <h1 className="content_title">POOLS PARTY</h1>

          <p className="content_pt text_ilatic">
            Using the POOLS Party social networking app, you can connect with
            people from all over the world to exchange ideas and stories about
            topics such as sports, technology, and event culture.
          </p>
          <p className="content_p">
            POOLS Party allows you to keep up with the latest trends by
            providing a variety of information. You can organize a private
            "party" through the POOLS Party app, where only those who own this
            phone can join.
          </p>
        </div>

        <div className="content_img">
          <img src={img} alt="img" width="100%" height="100%" />
        </div>
      </div>
    </ConsumeWrapper>
  );
}
export default forwardRef(Consume);

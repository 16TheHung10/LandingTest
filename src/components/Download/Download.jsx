import React, { forwardRef, useRef, useState } from "react";
import { DownloadWrapper } from "./styled";
import download from "../../assets/download/download.png";

function Download() {
  return (
    <DownloadWrapper className="Download">
      <div className="content">
        <h1 className="content_title">Download</h1>

        {/* <div className="content_card">
          <button className="card_item">
            <div className="item_img">
              <img src={download} alt="icon" width="100%" height="100%" />
            </div>

            <p className="item_text">DOWNLOAD 1</p>
          </button>

          <button className="card_item">
            <div className="item_img">
              <img src={download} alt="icon" width="100%" height="100%" />
            </div>

            <p className="item_text">DOWNLOAD 1</p>
          </button>

          <button className="card_item">
            <div className="item_img">
              <img src={download} alt="icon" width="100%" height="100%" />
            </div>

            <p className="item_text">DOWNLOAD 1</p>
          </button>
        </div> */}
      </div>
    </DownloadWrapper>
  );
}
export default forwardRef(Download);

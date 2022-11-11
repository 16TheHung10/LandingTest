import React, { forwardRef, useRef, useState } from "react";
import { PreOrderWrapper } from "./styled";

function PreOrder() {
  return (
    <PreOrderWrapper className="PreOrder">
      <div className="content">
        <h1 className="content_title">Pre-Order</h1>
      </div>
    </PreOrderWrapper>
  );
}
export default forwardRef(PreOrder);

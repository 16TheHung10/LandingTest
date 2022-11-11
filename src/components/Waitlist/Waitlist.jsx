import React, { forwardRef, useRef, useState } from "react";
import { PreOrderWrapper } from "./styled";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import warning from "../../assets/preorder/warning.png";

function PreOrder() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const onsubmit = (e) => {
    setLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbwaiaSItVVdIf2E24tZ7z6N7hWACjiX4fwsuUqBCJBpbwm_VLCBUPZg9Ix8-kXCQsnP/exec";
    e.preventDefault();
    const data = new FormData(formRef.current);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then(() => {
        setLoading(false);
        toast("Success!");
      })
      .catch(() => {
        setLoading(false);
        toast("Somethings went wrong!. Please try again");
      });
  };
  return (
    <PreOrderWrapper className="pre_order">
      <div className="content" id="pre-order">
        <div className="content_left">
          <h3 className="content_t">Pre-order today for $100</h3>
          <h1 className="content_title">Join the Waitlist</h1>
          <p className="content_p">
            Enter your information, connect your wallet, and make a $100 USDC
            refundable deposit to reserve your place on the waitlist. once your
            payment has been accepted, you will be added to the waitlist and
            notified when it is time to complete your order. To be secured a
            seat to the Pools waitlist, a $100 USDC deposit is required. The
            deposit will be deducted from the final purchase price of the Pools
            phone.
          </p>

          <form
            ref={formRef}
            className="content_form"
            onSubmit={onsubmit}
            // method="POST"
            // action="https://script.google.com/macros/s/AKfycbwaiaSItVVdIf2E24tZ7z6N7hWACjiX4fwsuUqBCJBpbwm_VLCBUPZg9Ix8-kXCQsnP/exec"
          >
            <input
              name="Email"
              type="email"
              className="content_input"
              placeholder="Email address"
              required
            />

            <input
              name="Country"
              type="text"
              className="content_input"
              placeholder="Country"
              required
            />

            {loading ? (
              <button
                disabled
                style={{ cursor: "not-allowed" }}
                className="content_btn"
              >
                Please waiting for your information is saved...
              </button>
            ) : (
              <button className="content_btn">Pre-order Now</button>
            )}
          </form>

          <div className="warning_content">
            <div className="warning_img">
              <img src={warning} alt="img" width="100%" height="100%" />
            </div>

            <div className="warning_item">
              <span className="warning_text">
                Device expected to ship in July 2023
              </span>

              <span className="warning_text">
                Final purchase price will be $800
              </span>
            </div>
          </div>
        </div>
      </div>
    </PreOrderWrapper>
  );
}
export default forwardRef(PreOrder);

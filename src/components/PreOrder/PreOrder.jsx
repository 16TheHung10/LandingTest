import React, { useRef, useState } from "react";
import preOrder from "../../assets/images/pre-order.png";
import { PreOrderWrapper } from "./styled";
import { ReactComponent as WarningIcon } from "../../assets/images/icon-pre-order.svg";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
export default function PreOrder() {
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
    <PreOrderWrapper>
      <div className="left" id="pre-order">
        <div className="content">
          <h2>{t("pre-order-today-for-$100")}</h2>
          <h1>{t("join-the-waitlist")}</h1>
          <p>
            {t(
              "enter-your-information,-connect-your-wallet,-and-make-a-$100-usdc-refundable-deposit-to-reserve-your-spot-on-the-waitlist.-when-your-payment-is-received,-you-will-be-added-to-the-waitlist-and-notified-when-it-is-time-to-complete-your-order.\n\nto-be-added-to-the-pools-waitlist,-a-$100-usdc-deposit-is-required.-the-depsit-will-be-deducted-from-the-final-purchase-price-of-the-pools-phone."
            )}
          </p>
        </div>
        <form
          ref={formRef}
          className="form"
          onSubmit={onsubmit}
          // method="POST"
          // action="https://script.google.com/macros/s/AKfycbwaiaSItVVdIf2E24tZ7z6N7hWACjiX4fwsuUqBCJBpbwm_VLCBUPZg9Ix8-kXCQsnP/exec"
        >
          <input
            name="Email"
            type="email"
            placeholder={t("email-address")}
            required
          />
          <input
            name="Country"
            type="text"
            placeholder={t("country")}
            required
          />
          {loading ? (
            <button disabled style={{ cursor: "not-allowed" }}>
              Please waiting for your information is saved...
            </button>
          ) : (
            <button>{t("pre-order-now")} </button>
          )}
        </form>
        <div className="short_des">
          <WarningIcon width={50} />
          <span>{t("device-expected-to-ship-in-july-2023")}</span>
        </div>
      </div>
      {/* <div className="right">
        <img src={preOrder} alt="" />
      </div> */}
    </PreOrderWrapper>
  );
}

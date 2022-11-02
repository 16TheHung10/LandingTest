import React from "react";
import preOrder from "../../assets/images/pre-order.png";
import { PreOrderWrapper } from "./styled";
import { ReactComponent as WarningIcon } from "../../assets/images/icon-pre-order.svg";
import { useTranslation } from "react-i18next";
export default function PreOrder() {
  const { t, i18n } = useTranslation();
  return (
    <PreOrderWrapper>
      <div className="left" id="pre-order">
        <div className="content">
          <h2>{t("pre-order-today-for-$100")}</h2>
          <h1>{t("join-the-waitlist")}</h1>
          <p>
          {t("enter-your-information,-connect-your-wallet,-and-make-a-$100-usdc-refundable-deposit-to-reserve-your-spot-on-the-waitlist.-when-your-payment-is-received,-you-will-be-added-to-the-waitlist-and-notified-when-it-is-time-to-complete-your-order.\n\nto-be-added-to-the-pools-waitlist,-a-$100-usdc-deposit-is-required.-the-depsit-will-be-deducted-from-the-final-purchase-price-of-the-pools-phone.")}
          </p>
        </div>
        <form className="form">
          <input type="text" placeholder={t("email-address")} />
          <input type="text" placeholder={t("country")} />
          <button>{t("pre-order-now")} </button>
        </form>
        <div className="short_des">
          <WarningIcon width={50} />
          <span>
          {t("device-expected-to-ship-in-july-2023")}
          </span>
        </div>
      </div>
      {/* <div className="right">
        <img src={preOrder} alt="" />
      </div> */}
    </PreOrderWrapper>
  );
}

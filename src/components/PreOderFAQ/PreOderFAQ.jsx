import React from "react";
import { Hero } from "./styled";
import arrow from "../../assets/images/arrow-dow.png";
import HomeLayoutOtherPage from "../../layouts/HomeLayoutOtherPage";
// import backgroud from "../../assets/images/img-groud-oderpage/backgroudPreoder.png"
import { useTranslation } from "react-i18next";
import HomeLayout from "../../layouts/HomeLayout";

function PreOderFAQ() {
  const { t, i18n } = useTranslation();
  return (
    <HomeLayout>
      <Hero className="container">
        <h1 className="title">{t("Pre-order")} FAQs</h1>
        <div className="list">
          <div className="list_item">
            <p className="decs">
              {t("how_to_be_placed_on_the_pools_phone_waitlist")}
            </p>
            <img className="img_item" src={arrow} />
          </div>

          <div className="list_item">
            <p className="decs">
              {t(
                "how_much_money_need_customers_deposit_to_get_on_the_waitlist"
              )}
            </p>
            <img className="img_item" src={arrow} />
          </div>

          <div className="list_item">
            <p className="decs">
              {t("which_countries_can_pools_phone_be_distributed")}
            </p>
            <img className="img_item" src={arrow} />
          </div>

          <div className="list_item">
            <p className="decs">{t("when_pools_phones_released")}</p>
            <img className="img_item" src={arrow} />
          </div>

          <div className="list_item">
            <p className="decs">
              {t("will_pools_phone_have_the_google_play_store_installed")}
            </p>
            <img className="img_item" src={arrow} />
          </div>

          <div className="list_item">
            <p className="decs">
              {t(
                "do_i_need_to_deposit_after_drawing_and_buying_nft_on_pools_phone_nft_roulette"
              )}
            </p>
            <img className="img_item" src={arrow} />
          </div>
        </div>
      </Hero>
    </HomeLayout>
  );
}

export default PreOderFAQ;

import React from 'react'
import {HeroDecentralizedExchange} from "./styled"
// import Bialance from "../../../assets/images/img-groud-oderpage/Bialance.png"
// import Cork from  "../../../assets/images/img-groud-oderpage/Cork.png"
import { useTranslation } from "react-i18next";
function DecentralizedExchange() {
    const { t, i18n } = useTranslation();
  return (
    <HeroDecentralizedExchange class = "container">
        <div className='wrap_Hero'>
            <div className='wrap_DecentralizedExchange'>
                {/* <div className='img'>
                    <img className='img_item_top' src={Bialance}/>
                    <img className='img_item_bottom' src={Cork}/>
                </div> */}

                <div className='conten'></div>

                <div className='title'> 
                    <h1 className='title_item'>{t("decentralized-exchange")}</h1>
                    <p className='desc'>{t("users_can_easily_swap_trade_rewarded_tokens_time_decentralized_exchange_pools_furthermore_digital_assets_can_easily_used_staking_participating_dao")}
                    </p>
                </div>
            </div>
        </div>
    </HeroDecentralizedExchange>
  )
}

export default DecentralizedExchange
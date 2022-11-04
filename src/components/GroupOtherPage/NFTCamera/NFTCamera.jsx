import React from 'react'
import {HeroCamera} from "./styled"
import { useTranslation } from "react-i18next";

function NFTCamera() {
  const { t, i18n } = useTranslation();
  return (
    <HeroCamera classname = "container">
        <div className='wrap_camera'>
            <div className='title_camera'> 
                <h1 className='title_item'>{t("nft-camera")}</h1> 
                <p className='derc'>{t("all-images-captured-by-the-pools-camera-are-instantly-converted-to-nfts.\nthe-newly-created-nft-will-provide-users-with-a-great-number-of-additional-extended-values.")}
                </p>
            </div>
        </div>
    </HeroCamera>
  )
}

export default NFTCamera
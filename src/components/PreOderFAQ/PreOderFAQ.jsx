import React from 'react'
import { Hero } from "./styled";
import arrow from "../../assets/images/arrow-dow.png"

function PreOderFAQ() {
  return (
    <Hero>
        <h1 className='title'>Pre-order FAQs</h1>
        <div className='list'>
            <div className='list_item'>
                <span className='decs'>How to be placed on the Pools Phone Waitlist?</span>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <span className='decs'>How much money need customers deposit to get on the waitlist?</span>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <span className='decs'>Which countries can Pools Phone be distributed?</span>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <span className='decs'>When Pools Phones released?</span>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <span className='decs'>Will Pools Phone have the Google Play Store installed?</span>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <span className='decs'>Do I need to deposit after drawing and buying NFT on Pools Phone NFT Roulette?</span>
                <img className='img_item' src={arrow} />
            </div>
        </div>
    </Hero>
  )
}

export default PreOderFAQ
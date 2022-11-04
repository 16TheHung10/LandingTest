import React from 'react'
import { Hero } from "./styled";
import arrow from "../../assets/images/arrow-dow.png"
import HomeLayoutOtherPage from '../../layouts/HomeLayoutOtherPage';
// import backgroud from "../../assets/images/img-groud-oderpage/backgroudPreoder.png"

function PreOderFAQ() {
  return (
    <HomeLayoutOtherPage>
    <Hero className= 'container'>
        <h1 className='title'>Pre-order FAQs</h1>
        <div className='list'>
            <div className='list_item'>
                <p className='decs'>How to be placed on the Pools Phone Waitlist?</p>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <p className='decs'>How much money need customers deposit to get on the waitlist?</p>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <p className='decs'>Which countries can Pools Phone be distributed?</p>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <p className='decs'>When Pools Phones released?</p>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <p className='decs'>Will Pools Phone have the Google Play Store installed?</p>
                <img className='img_item' src={arrow} />
            </div>

            <div className='list_item'>
                <p className='decs'>Do I need to deposit after drawing and buying NFT on Pools Phone NFT Roulette?</p>
                <img className='img_item' src={arrow} />
            </div>
        </div>
    </Hero>
    </HomeLayoutOtherPage>
    
  )
}

export default PreOderFAQ
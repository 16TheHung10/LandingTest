import React from 'react'
// import HomeLayoutOtherPage from "../../../layouts/HomeLayoutOtherPage"
import {HeroRewardMusic} from "./styled"
import backgroundRewar from "../../../assets/images/img-groud-oderpage/backgroudReward.png"

function RewardMusic() {
  return (
    // <HomeLayoutOtherPage>
        <HeroRewardMusic className='container'>
            <div className='wrap_hero'>
                <div className='img_left'>
                    <img className='img_item' src={backgroundRewar}/>
                </div>

                <div className='title_right'>
                    <h1 className='title_item'>Reward Music</h1>
                    <h3 className='sub_title'>Listen to music for free and mine tokens every day.</h3>
                    <p className='desc'>Earn tokens by listening to free music from all genres all 
                        over the world via radio streaming. Furthermore, users can 
                        earn even larger rewards by winning the Daily Airdrop Big Event, 
                        which occurs every day.
                    </p>
                </div>
            </div>
        </HeroRewardMusic>
    // </HomeLayoutOtherPage>
  )
}

export default RewardMusic
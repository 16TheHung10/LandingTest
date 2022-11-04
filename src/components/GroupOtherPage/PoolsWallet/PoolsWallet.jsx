import React from 'react'
import phone from "../../../assets/images/img-groud-oderpage/phone.png"
import box1 from "../../../assets/images/img-groud-oderpage/box1.png"
import box2 from "../../../assets/images/img-groud-oderpage/box2.png"
import box3 from "../../../assets/images/img-groud-oderpage/box3.png"
import box4 from "../../../assets/images/img-groud-oderpage/box4.png"
import {HeroPoolsWallet} from "./styled"

function PoolsWallet() {
  return (
    <HeroPoolsWallet>
        <div className='wrap_hero'>
            <div className='img_phone'>
                <img className='img_phone_background' src={phone}/>
            </div>

            <div className='title_phone'>
                <div className='title_phone_item'>
                    <h3 className='sub_title'>The Advantage of the</h3>
                    <h1 className='title_phone_item_inline'>POOLS Wallet</h1>
                    <p className='derc'>
                    · Manage digital assets easily, such as tokens acquired as rewards from Pools.
                    · Send cryptocurrency instantly to any location around the world by the chat window of the Wallet Messenger feature.
                    · Provide secure security and transactions with military security solutions.
                    · Increase profits by having a better asset management system than financial institutions (staking, lending, mortgage lending,..)
                    · Trade cryptocurrency in conjunction with the decentralized pools exchange.
                    </p>
                </div>

                <div className='something'>
                    <div className='something_top'>
                        <img className='img_item' src={box1}/>
                        <img className='img_item' src={box3}/>
                    </div>

                    <div className='something_bottom'>
                        <img className='img_item' src={box2}/>
                        <img className='img_item' src={ box4}/>
                    </div>

                </div>
            </div>
        </div>
    </HeroPoolsWallet>
  )
}

export default PoolsWallet
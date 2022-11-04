import React from 'react'
import {HeroDecentralizedExchange} from "./styled"
// import Bialance from "../../../assets/images/img-groud-oderpage/Bialance.png"
// import Cork from  "../../../assets/images/img-groud-oderpage/Cork.png"
function DecentralizedExchange() {
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
                    <h1 className='title_item'>Decentralized Exchange</h1>
                    <p className='desc'>Users can easily swap or trade rewarded tokens at any time on 
                        the decentralized exchange 'Pools’. Furthermore, digital assets 
                        can be easily used by staking and participating in the DAO.
                    </p>
                </div>
            </div>
        </div>
    </HeroDecentralizedExchange>
  )
}

export default DecentralizedExchange
import React from 'react'
import img from '../../../assets/images/time and money.jpg'

export default function WhatIsInvest() {
  return (
    <div className='WhatIs-investSection'>
        <div className="container-fluid">
            <div className="flex-box">
                <div className="invest-description">
                    <h3>What is Invest?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel porro quae error temporibus assumenda culpa iste delectus necessitatibus! Quam nam iste praesentium consequuntur cum aut iusto deserunt est itaque doloremque excepturi facilis, deleniti dolorem totam distinctio beatae quidem ipsa nobis obcaecati necessitatibus hic delectus eveniet blanditiis. Tenetur autem, itaque unde odio voluptates voluptatem magni atque impedit, nisi eius corporis!</p>
                </div>
                <div className="invest-describe-img">
                    <span>
                        <img src={img} alt="" />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

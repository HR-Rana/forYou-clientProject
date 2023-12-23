import React from 'react'

export default function OfferCard({title, amount, interst,month}) {
  return (
    <div className='offer-card-area'>
        <div className="title">
            <h4>{title}</h4>
        </div>
        <div className="body">
            <h3><span>${amount}</span> Investment Plan</h3>
            <p>We're offering you to invest <span>${amount}</span> For <span>{month}</span> and Get <span>{interst}</span> Interst..!</p>
        </div>
        <div className="footer">
            <button>Let's Start</button>
        </div>
    </div>
  )
}

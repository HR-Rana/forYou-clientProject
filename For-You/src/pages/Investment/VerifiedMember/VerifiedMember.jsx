import React from 'react'
import VerifiedUserList from './VerifiedUserList'

export default function VerifiedMember() {
  return (
    <div className='verified-member-page'>
        <div className="page-title">
            <h3>Our Verified Users...</h3>
         </div>
         <section>
            <div className="container-fluid">
                <div>
                    <VerifiedUserList/>
                </div>
            </div>
         </section>
    </div>
  )
}

import React from 'react'
import error from '../../assets/images/error.png'


export default function Error() {
  return (
    <div className='error-page'>
        <p>Sorry, page not found. please try again another way..</p>

        <span>
          <img src={error} alt="page not found" />
        </span>
    </div>
  )
}

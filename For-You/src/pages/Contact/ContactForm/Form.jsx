import React from 'react'

export default function Form() {
  return (
    <div className='contact-form'>
        <form action="">
            <input type="text" name='name' placeholder='Name' />
            <input type="number" name='name' placeholder='Enter your Whatsapp Number' />
            <input type="email" name='email' placeholder='Email Address' />
            <textarea name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
            <input type="submit" value={"Send Message"} />
        </form>
    </div>
  )
}

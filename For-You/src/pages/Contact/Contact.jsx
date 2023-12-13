import React from 'react'
import ContactForm from './ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className='Contact-page'>
        <div className="container-fluid">
            <div className="title">
              <h3>Get in Touch</h3>
              <p>Let's contact us about your Opinio/instruction or if your need anykind of help</p>
            </div>
            <section>
                <ContactForm/>
            </section>
        </div>
    </div>
  )
}

import React from 'react'

import github from '../../assets/ContactImg/github.png'
import email from '../../assets/ContactImg/email.png'
import instagram from '../../assets/ContactImg/instagram.png'
import tele from '../../assets/ContactImg/tele.png'


const Contact = () => {
  return (
    <div className="Contact">
    <div className="passion-container">
        <p className='text-title'><span id='text-title-a'>Contact</span><span id='text-title-b'> Me</span></p>
        <div className="passion-items">
            <div className="card-contact">
                <img src={github} />
            </div>
            <div className="card-contact">
                <img src={instagram} />

            </div>
            <div className="card-contact">
                <img src={email} />
            </div>
            <div className="card-contact">
                <img src={tele} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact;
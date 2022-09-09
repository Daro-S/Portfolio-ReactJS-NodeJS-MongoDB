import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <p>DaroSim</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li id='about'>About</li>
                    <li id='Passion'>Passions</li>
                    <li id='Portfolio'>Portfolio</li>
                    <button className='contact-btn'>Contact Me</button>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
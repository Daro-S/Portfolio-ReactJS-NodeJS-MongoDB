import React from 'react'

import frontend from '../../assets/PassionImg/frontend.png'
import backtend from '../../assets/PassionImg/backend.png'
import uxui from '../../assets/PassionImg/UX-UI.png'
const Passions = () => {
  return (
    <div className="passion-container-a">
        <p className='text-title'><span id='text-title-a'>Additional</span><span id='text-title-b'> passions</span></p>
        <div className="passion-items">
            <div className="card">
                <img src={frontend} />
            <div className="item-container">
                <h4>Front-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
            <div className="card">
                <img src={backtend} />
            <div className="item-container">
                <h4>Back-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
            <div className="card">
                <img src={uxui} />
            <div className="item-container">
                <h4>Front-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Passions
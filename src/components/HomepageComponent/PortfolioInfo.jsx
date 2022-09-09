import React from 'react'

import sendpay from '../../assets/PortfolioImg/sendpay.png'
import ecommerce from '../../assets/PortfolioImg/ecommerce.png'
import beatslearning from '../../assets/PortfolioImg/beatslearning.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
    <div className="passion-container">
        <p className='text-title'><span id='text-title-a'>Additional</span><span id='text-title-b'> Portfolio</span></p>
        <div className="passion-items">
            <div className="card">
                <img src={sendpay} />
            <div className="item-container">
                <h4>Front-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
            <div className="card">
                <img src={ecommerce} />
            <div className="item-container">
                <h4>Back-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
            <div className="card">
                <img src={beatslearning} />
            <div className="item-container">
                <h4>Front-End Developer</h4>
                <p> (ReactJS & Angular)</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Portfolio
import React from 'react'
import './Benefits.css'
import whychooseus from '../../assets/whychooseus.png'
import Tick from '../../assets/Tick.png'

const Reasons = () => {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={whychooseus} alt="" />
            </div>

            <div className="right-r">
                <span>Some Benefits</span>
                <div>
                    <span className='stroke-text'>Of</span>
                    <span> Joining us?</span>
                </div>

                <div className='details-r'>

                    <div>
                        <img src={Tick} alt="" />
                        <span>Pushing</span>
                    </div>

                    <div><img src={Tick} alt="" />
                        <span>E-sports</span>
                    </div>

                    <div><img src={Tick} alt="" />
                        <span>Champ cwls</span>
                    </div>

                    <div><img src={Tick} alt="" />
                        <span>Organized Discord Server</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reasons
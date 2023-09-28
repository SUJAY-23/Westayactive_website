import React, { useState } from 'react'
import './AboutUs.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


import {motion} from 'framer-motion'

const AboutUs = () => {
    const transition = {type: 'sprint', duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className='Testimonials' id='aboutus' style={{margin: '5% 0px 5% 0px'}}>
            <div className="left-t">
                <span>WSA</span>
                <span className='stroke-text'>What people say</span>
                <span>About Us</span>

                <motion.span
                key={selected}
                initial={{opacity: 1, x: -100 }}
                animate={{opacity: 1, x: 0}}
                exit= {{opactiy: 1, x: 100}}
                transition={transition}
                >{testimonialsData[selected].review}
                </motion.span>

                <span>
                    <span style={{ color: "var(--green)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">

            <motion.div
                initial={{opacity: 1, x: -100 }}
                transition={{...transition, duration: 2}}
                whileInView = {{opactiy: 1, x: 0}} 
            ></motion.div>
            <motion.div
                initial={{opacity: 1, x: 100 }}
                transition={{...transition, duration: 2}}
                whileInView = {{opactiy: 1, x: 0}} 
            ></motion.div>
                

                <motion.img 
                key={selected}
                initial={{opacity: 1, x: 100 }}
                animate={{opacity: 1, x: 0}}
                exit= {{opactiy: 1, x: 0}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img

                        // logic
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}

                        src={leftArrow} alt="" />
                        
                    <img

                        // logic
                        onClick={() => {
                            selected === tLength - 1 ?
                                setSelected(0) : setSelected((prev) => prev + 1);
                        }}

                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
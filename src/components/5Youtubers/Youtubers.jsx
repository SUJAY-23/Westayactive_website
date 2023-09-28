import React from 'react'
import './Youtubers.css'
import Card from 'react-bootstrap/Card';

import img1 from "../../assets/marsh.png"
import img2 from "../../assets/duck.gif"
import img3 from "../../assets/bau.png"
import img4 from "../../assets/dp.png"




const Plans = () => {
    return (
        <div className='plans-container' id='yt' style={{ margin: '5% 0px 0px 0px' }}>

            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>Our</span>
                {/* <span className='stroke-text'>Famous </span> */}
                <span className='stroke-text'>Youtubers</span>
            </div>

            {/* Plans Card */}

            <div className="cards">

                <div>
                    <Card className='c-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Clash With Marsh</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                There is a channel to Skelly lovers, usually posting shorts With skelly donuts.
                            </Card.Text>
                            <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/@ClashwithMarsh" target='blank'>
                                <samp className='btn'
                                    style={{ color: 'white', backgroundColor: 'transparent', margin: '50px', height: '1rem', border: '2px solid white' }}
                                >Watch Now</samp>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='c-1' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Duck Planet Gaming</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                Showcases uniquely edited live Legends attacks and clash related content that you’ve never seen before.
                            </Card.Text>
                            <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/@duckplanetgaming" target='blank'>
                                <samp className='btn'
                                    style={{ color: 'white', backgroundColor: 'transparent', margin: '50px', height: '1rem', border: '2px solid white' }}
                                >Watch Now</samp>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='c-1' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Clash With Bau</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                Youtube channel is all about base building I help players by giving bases mainly focus on different type of base.
                            </Card.Text>
                            <a style={{ textDecoration: 'none' }}
                                href="https://www.youtube.com/@clashwithbau2467" target='blank'>
                                <samp className='btn'
                                    style={{ color: 'white', backgroundColor: 'transparent', height: '1rem', margin: '50px', border: '2px solid white' }}
                                >Watch Now</samp>
                            </a>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card className='c-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title >Dead Poet - Clash of Clans</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                Hello Everybody ! I am Dead Poet and I post clash of clans videos. Please do subscribe if you like my videos.
                            </Card.Text>
                            <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/@deadpoetcoc" target='blank'>
                                <samp className='btn'
                                    style={{ color: 'white', backgroundColor: 'transparent', margin: '50px', height: '1rem', border: '2px solid white' }}
                                >Watch Now</samp>
                            </a>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    )
}

export default Plans
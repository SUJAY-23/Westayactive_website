import React, { useState } from 'react'
import './Navigation.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"


function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px', right: '10px' }}

          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : <ul className='header-menu'>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
          >Home</Link>
        </li>
        
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='programs'
            spy={true}
            smooth={true}
          >Services</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='reasons'
            spy={true}
            smooth={true}
          >Benefits</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='yt'
            spy={true}
            smooth={true}
          >Youtubers</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='aboutus'
            spy={true}
            smooth={true}
          >About Us</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='contact'
            spy={true}
            smooth={true}
          >Contact Us</Link>
        </li>

      </ul>}
    </div>
  )
}

export default Header
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FaBars,FaAngleUp, FaSignOutAlt} from 'react-icons/fa';

// Img
import logo from '../../assets/img/logo.png';
// Styles
import { HeaderWrapper, NavContainer } from './Header.styles';
// Constant
import { links, linksBurger } from '../../utils/constant';

function Header() {
  const location = useLocation()
  const headerLocation = location.pathname === '/' ? true : false

  const [showDrop,setShowDrop] = useState(false)
  const handlerShow = () => {
    setShowDrop(!showDrop)
  }
  return (
    <HeaderWrapper className={headerLocation ? 'home-header' : null}>
      <NavContainer className='main-container '>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='trading' />
            </Link>
          </div>
          <div className='nav-content'>
            <ul className='nav-links'>
              {links.map((link, index, arr) => {
                const { text, url } = link;
                if (arr.length - 1 === index) {
                  return (
                    <li key={index}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link to={url}>{text}</Link>
                      <span></span>
                    </li>
                  );
                }
              })}
            </ul>
            <div className='nav-burger'>
              <button type='button' className='nav-toggle' onClick={handlerShow}>
                <FaBars />
              </button>
              <div className={showDrop ? `nav-dropdown active` : `nav-dropdown`}>
                <button type='button' className="nav-dropdown-icon" onClick={()=>handlerShow()}>
                  <FaAngleUp/>
                </button>
                <ul>
                  <li>
                    <Link to='/my-account'>My Account</Link>
                  </li>
                  {linksBurger.map((link, index) => {
                    const { text, url } = link;
                    return (
                      <li key={index}>
                        <Link to={url}>{text}</Link>
                      </li>
                    );
                  })}
                  <li className='nav-lg-lo'>
                    <Link to={"/logout"}>
                      Log Out
                    </Link>
                    <button type='button' onClick={()=>handlerShow()}>
                        <FaSignOutAlt/>
                    </button>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </NavContainer>
    </HeaderWrapper>
  );
}

export default Header;

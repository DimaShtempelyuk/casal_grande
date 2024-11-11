import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { slide as BurgerMenu } from 'react-burger-menu';
import LogoSection from './HeaderSubComponents/LogoSection';
import NavLinks from './HeaderSubComponents/Navigation';
import IconsContainer from './HeaderSubComponents/IconsContainer';
import LanguageDropdown from './HeaderSubComponents/LanguageDropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    if (viewportWidth < 1280) setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      {(viewportWidth < 1280) && (
        <BurgerMenuButton onClick={handleMenuToggle}>
          <FaBars size={30} />
        </BurgerMenuButton>
      )}
      
      <LogoSection isMobile={viewportWidth < 768} showName={viewportWidth >= 768} />
      
      {viewportWidth >= 1280 && <NavLinks />} {/* Centered links for desktop */}

      {(viewportWidth < 1280) && (
        <PulsingPhoneNumber href="tel:+420704057272">+420 704 057 272</PulsingPhoneNumber>
      )}

      {viewportWidth >= 1280 && (
        <DesktopPhoneNumber href="tel:+420704057272">+420 704 057 272</DesktopPhoneNumber>
      )}

      <IconsContainer />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1dvh 2dvw;
  height: 8dvh;
  background-color: #333;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const BurgerMenuButton = styled.div`
  cursor: pointer;
  z-index: 1001;
  padding-right: 10px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const PulsingPhoneNumber = styled.a`
  font-size: 1.8em;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  animation: pulse 1.5s infinite;

  &:hover {
    text-decoration: underline;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const DesktopPhoneNumber = styled(PulsingPhoneNumber)`
  margin-left: auto;
  padding-right: 1dvw;
`;

const menuStyles = {
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    top: '10%',
  },
  bmMenuWrap: {
    top: '10%',
    left: '0px',
    height: '100%',
  },
  bmMenu: {
    background: '#fff',
    width: '75%',
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '1.5em',
    color: '#000',
  },
};

export default Header;
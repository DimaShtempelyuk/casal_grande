import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/casalgrande_logo.png';

const LogoSection = ({ isMobile }) => (
  <LogoContainer>
    <Logo src={logo} alt="Casagrande Furgon Rental" />
    {!isMobile && <BrandLink to="/">Casagrande Furgon Rental</BrandLink>}
  </LogoContainer>
);

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-left: -50px; /* Shift the container left by -50px for mobile */
  }
`;

const Logo = styled.img`
  height: 95px;
  width: auto;
`;

const BrandLink = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export default LogoSection;

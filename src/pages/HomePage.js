import React from 'react';
import CarCard from '../components/CarCard';
import styled from 'styled-components';
import { cars } from '../data/carData';

const HomePage = () => {
    return (
      <Container>
        <Title>Vítejte v Casalgrande</Title>
        <CardContainer>
          {cars.map((car) => (
            <CarCard
            key={car.id}
            id={car.id}
            name={car.name} // Translation key
            images={car.images}
            description={car.description} // Translation key
          />
          ))}
        </CardContainer>
      </Container>
    );
  };

// Styled components
const Container = styled.div`
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export default HomePage;

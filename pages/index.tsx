import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Nav } from '@component/components/Nav/Nav'
import { Car } from '@component/components/Car/Car'
import { CarText } from '@component/components/CarText/CarText'


// Header: 
// Nav
// Car
// Main:

// footer: 

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Nav></Nav>
      <HomeContentWrapper>
        <CarSection>
          <CarText></CarText>
          <Car></Car>
        </CarSection>
        <CarFooter></CarFooter>
      </HomeContentWrapper>

      <PromiseContentWrapper>
      </PromiseContentWrapper>
      <ServicesContentWrapper>
      </ServicesContentWrapper>
      <AboutContentWrapper>
      </AboutContentWrapper>
      <ContactContentWrapper>
      </ContactContentWrapper>
    </HomePageContainer>
  )
}

// MOVE ALL BELOW STYLES TO CORRECT STYLED PAGES

const HomePageContainer = styled.div`
  height: 500vh;
`;

const HomeContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  height: 100vh;
  
  /* @media screen and (max-width: 920px) {
    width: 924.16px;
  }; */
`;

const PromiseContentWrapper = styled.div`
  background-color: blue;
  height: 100vh ;
`;

const ServicesContentWrapper = styled.div`
  background-color: red;
  height: 100vh ;
`;

const AboutContentWrapper = styled.div`
  background-color: green;
  height: 100vh ;
`;

const ContactContentWrapper = styled.div`
  background-color: yellow;
  height: 100vh ;
`;

const CarSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 500px;
`;

const CarFooter = styled.div`
`;

export default HomePage;


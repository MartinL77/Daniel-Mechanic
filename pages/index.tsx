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
          <CarMainContent>
          <CarTextWrapper>
          <CarText></CarText>
          </CarTextWrapper>
          <CarWrapper>
            <CarSubText>Redefining the art of car detailing</CarSubText>
          <Car></Car>
          </CarWrapper>
          </CarMainContent>
          <CarFooter>
          <CarFooterTextWrapper>
          <CarFooterCall>
            CALL US NOW AT:
            0477 888 999
          </CarFooterCall>
          <CarFooterLocation>
            OUR LOCATION:
            MCG, Melbourne
          </CarFooterLocation>
          </CarFooterTextWrapper>
        </CarFooter>
        </CarSection>
      </HomeContentWrapper>
      <PromiseContentWrapper>
      </PromiseContentWrapper>
      <ServicesContentWrapper>
      <div id="services">Services Section</div>
      </ServicesContentWrapper>
      <AboutContentWrapper>
        <div id="about">About us</div>
      </AboutContentWrapper>
      <ContactContentWrapper>
        <div id="contact">Contact</div>
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
  position: relative;
  
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
width: 100%;
`;

const CarMainContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-bottom: 100px;
width: 100%;
`;

const CarTextWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
z-index: 2;
overflow: hidden;
`;

const CarWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
width: 80%;
top: 150px;
overflow: hidden;
`;

const CarSubText = styled.div`
  font-size: 10px;
`;

const CarFooter = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
height: 125px;
position: absolute;
bottom: 0;
background-color: lightgrey;
`;

const CarFooterCall = styled.div`
  font-size: 20px;
  margin: 20px 70px;
  display: flex;
  align-items: center;
`;

const CarFooterLocation = styled.div`
  font-size: 20px;
  margin: 20px 70px;
  display: flex;
  align-items: center;
`;

const CarFooterTextWrapper = styled.div`
  display: flex;
  overflow: hidden;
`

export default HomePage;


import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Nav } from '@component/components/Nav/Nav'
import { Car } from '@component/components/Car/Car'
import { CarText } from '@component/components/CarText/CarText'

import { FaArrowRight } from "react-icons/fa";



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
              <CarSubText>
                <h4>Redefining the art of car detailing</h4>
                <Link href={''}>
                  <div>
                    <span>Book A Wash</span>
                    <FaArrowRight />
                  </div>
                </Link>
              </CarSubText>
              <Car></Car>
            </CarWrapper>
          </CarMainContent>
          <CarFooter>
            <CarFooterTextWrapper>
              <CarFooterCall>
                <h4>CALL US NOW AT:</h4>
                <span>0477 888 999</span>
              </CarFooterCall>
              <CarFooterLocation>
                <h4>OUR LOCATION:</h4>
                <span>MCG, Melbourne</span>
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
  font-size: 14px;
  margin: 0 auto;
  padding: 40px 0;

  h4 {
    font-weight: 200;
    padding-bottom: 10px;

  }

  span {
    color: #1E90FF;
    font-weight: 700;
    padding-right: 5px;
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  svg {
    color: #1E90FF;
  }

  a {
    text-decoration: none;
  }
`;

const CarFooter = styled.div`
display: flex;
width: 100%;
height: 125px;
position: absolute;
bottom: 0;
background-color: lightgrey;
line-height: 30px;

h4 {
  color: grey;
  font-weight: 500;
  font-size: 12px;
}

span {
  color: #000836;
}
`;

const CarFooterCall = styled.div`
  padding: 0 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: solid 1px gray;
`;

const CarFooterLocation = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CarFooterTextWrapper = styled.div`
  display: flex;
  overflow: hidden;
`

export default HomePage;


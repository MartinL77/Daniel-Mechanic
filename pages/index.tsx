import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Nav } from '@component/components/Nav/Nav'
import { Car } from '@component/components/Car/Car'


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
      <Car></Car>
    </HomeContentWrapper>
    </HomePageContainer>
  )
}

const HomePageContainer = styled.div`
  height: 100vh;
`;

const HomeContentWrapper = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  
  /* @media screen and (max-width: 920px) {
    width: 924.16px;
  }; */
`;

export default HomePage;


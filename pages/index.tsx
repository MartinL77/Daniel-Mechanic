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

const HomePage: React.FC = () => {
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
  background-color: green;
  height: 100%;
`;

export default HomePage;


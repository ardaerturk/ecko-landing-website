import React from 'react';
import styled from 'styled-components/macro';
import CustomParticles from './CustomParticles';
import DesktopHeader from './header/DesktopHeader';
import FooterSection from './footer/FooterSection';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContent = styled.div`
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
    padding: 0 50px;
  }
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer id="main-container">
      <CustomParticles />
      <PageContent>
        <DesktopHeader />

        <MainContent>{children}</MainContent>
      </PageContent>

      <FooterSection />
    </MainContainer>
  );
};

export default Layout;

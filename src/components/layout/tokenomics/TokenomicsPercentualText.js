import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
  width: 80%;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  flex-direction: row;

  color: ${({ isMobile, textColor }) => (isMobile ? textColor : '#FFF')};
  text-shadow: 0 0 5px
    ${({ isMobile, textColor }) => (isMobile ? textColor : 'none')};

  .hover {
    color: ${({ textColor }) => (textColor ? textColor : '#FFFFFF')};
    text-shadow: 0 0 5px
      ${({ textColor }) => (textColor ? textColor : '#FFFFFF')};
  }
`;

const Percentual = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  color: ${({ textColor, theme: { colors } }) =>
    textColor ? textColor : colors.white};
  text-align: left;
  margin-right: 4px;
`;

const SubTitle = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  color: ${({ textColor, theme: { colors } }) =>
    textColor ? textColor : colors.white};
  text-align: left;
`;

const Description = styled.div`
  width: 100%;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: left;
`;

const TokenomicsPercentualText = ({
  percentual,
  subTitle,
  description,
  textColor,
  onMouseOver,
  onMouseLeave,
  isHover,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= theme.mediaQueries.mobilePixel) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <Container>
      <TitleContainer
        isMobile={isMobile}
        textColor={textColor}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <Percentual
          className={isHover === percentual && 'hover'}
          textColor={textColor}
        >{`${percentual}%`}</Percentual>
        <SubTitle
          className={isHover === percentual && 'hover'}
          textColor={textColor}
        >
          {subTitle}
        </SubTitle>
      </TitleContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default TokenomicsPercentualText;

import React from "react";
import { Button } from "../Button/ButtonElements";
import {
  BtnWrapper,
  Heading,
  Img,
  ImgWrap,
  InfoCol1,
  InfoCol2,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  ImgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <div>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={ImgStart}>
            <InfoCol1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    to="home"
                    smooth={true}
                    spy={true}
                    offset={-80}
                    exact="true"
                    primary={primary?1:0}
                    dark={dark?1:0}
                    dark2={dark2?1:0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </InfoCol1>
            <InfoCol2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </InfoCol2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;

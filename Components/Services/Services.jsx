import React from "react";
import { ServiceContainer, ServiceH1, ServicesCard, ServicesH2, ServicesIcon, Servicesp, ServicesWrapper } from "./ServicesElements";
import Icon1 from '../../Images/ashare.svg'
import Icon2 from '../../Images/notes.svg'
import Icon3 from '../../Images/virtualoffice.svg'
const Services = () => {
  return (
    <ServiceContainer id="services">
      <ServiceH1>Our Services</ServiceH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <Servicesp>
            We Help reduce your fees and increase your overall revenue
          </Servicesp>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Virtual Offices</ServicesH2>
          <Servicesp>
            You can access our plateform online anywhere in the world
          </Servicesp>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Premimum Benifits</ServicesH2>
          <Servicesp>
            Unlock our special membership card that returns 5% cash back. 
          </Servicesp>
        </ServicesCard>
      </ServicesWrapper>
    </ServiceContainer>
  );
};

export default Services;

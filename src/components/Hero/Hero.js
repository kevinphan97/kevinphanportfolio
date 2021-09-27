import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Kevin Phan
      </SectionTitle>
      <SectionText>
        I graduated Arizona State University in 2019 with a B.S. in Health Sciences (Pre-Professional).
        I am currently undergoing a full-stack web developement bootcamp offered by the University of Arizona which is finishing in Novemeber of 2021.
      </SectionText>
      <Button onClick = {() => window.location = 'https://gp2carmart.herokuapp.com/'}>Latest Project</Button>
    </LeftSection>
  </Section>
);

export default Hero;
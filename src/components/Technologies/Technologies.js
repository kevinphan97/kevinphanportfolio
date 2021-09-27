import React from 'react';
import { DiFirebase, DiReact, DiTerminalBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am currently learning attending a bootcamp that is covering both the front-end and back-end of creating web applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = '3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML, CSS, and JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = '3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node, APIs and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminalBadge size = '3rem'/>
        <ListContainer>
          <ListTitle>Prospect</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React, MERN, NoSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

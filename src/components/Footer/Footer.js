import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = 'tel:480-295-2285'>480-295-2285</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = 'mailto:kevin.b.phan97@gmail.com'>kevin.b.phan97@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never stop learning</Slogan>
        </CompanyContainer>
        <SocialIcons href = 'https://github.com/kevinphan97' target = '_'>
          <AiFillGithub size = '3rem' />
        </SocialIcons>
        <SocialIcons href = 'https://www.facebook.com/KevinnBPhan/' target = '_'>
          <AiFillFacebook size = '3rem' />
        </SocialIcons>
        <SocialIcons href = 'https://www.instagram.com/kevinnbphan/' target = '_'>
          <AiFillInstagram size = '3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/Logo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/mccartney0/allanflix" target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="Logo OurFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://github.com/mccartney0/allanflix" target="_blank" rel="noopener noreferrer">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

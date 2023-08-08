import { useState } from 'react';

import { Title, Subtitle } from './title.style';
import {  ConfirmButton } from './button.style';

const Certificate = () => {
  return (
    <>
      <Title>Certificado</Title>
      <Subtitle>Clique no botão abaixo para gerar seu certificado de participação.</Subtitle>
      <ConfirmButton>GERAR CERTIFICADO</ConfirmButton>
    </>
  );
};

export default Certificate;

import { AuditorioContainer, Container, Title, ContainerBox, Box, BoxContent, Info, Data } from './auditorio.style';
import { CgEnter, CgCloseO, CgCheckO } from 'react-icons/cg';
import { useState } from 'react';

const principalData = [
  {
    id: 1,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: '27 vagas',
  },
  {
    id: 2,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: 'Esgotado',
  },
  {
    id: 3,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: '30 vagas',
  },
  {
    id: 4,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: '7 vagas',
  }];
const lateralData = [
  {
    id: 7,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: '27 vagas',
  },
  {
    id: 8,
    title: 'Minecraft: montando o PC ideal',
    time: '09:00 - 10:00',
    status: 'Esgotado',
  },
];

const Auditorio = ({ active }) => {
  const [selection, setSelection] = useState(-1);

  return(
    <AuditorioContainer display={active === ''} >
      {/*  */}
      <Container>
        <Title>Auditório Principal</Title>
        <ContainerBox>
          {principalData.map((data) => (
            <Box enabled={data.status === 'Esgotado'} selected={selection === data.id} key={data.id} height={'79px'}
              onClick={() => { if(data.status !== 'Esgotado') setSelection(data.id);}}>
              <BoxContent>
                <Info>
                  <h5>{data.title}</h5>
                  <p>{data.time}</p>
                </Info>
                <Data soldOut={data.status === 'Esgotado'} >
                  {selection === data.id ? <CgCheckO /> : data.status === 'Esgotado' ? <CgCloseO /> : <CgEnter />}
                  {data.status}
                </Data>
              </BoxContent>
            </Box>
          ))}
        </ContainerBox>
      </Container>
      {/*  */}
      <Container>
        <Title>Auditório Lateral</Title>
        <ContainerBox> 
          {lateralData.map((data) => (
            <Box enabled={data.status === 'Esgotado'} selected={selection === data.id} key={data.id} height={'168px'}
              onClick={() => { if(data.status !== 'Esgotado') setSelection(data.id);}}>
              <BoxContent>
                <Info>
                  <h5>{data.title}</h5>
                  <p>{data.time}</p>
                </Info>
                <Data soldOut={data.status === 'Esgotado'} >
                  {selection === data.id ? <CgCheckO /> : data.status === 'Esgotado' ? <CgCloseO /> : <CgEnter />}
                  {data.status}
                </Data>
              </BoxContent>
            </Box>
          ))}
        </ContainerBox>
      </Container>
      {/*  */}
      <Container>
        <Title>Sala de Workshop</Title>
        <ContainerBox> 
          <Box>
            <BoxContent>
              <Info>
                <h5>Minecraft: montando o PC ideal</h5>
                <p>09:00 - 10:00</p>
              </Info>
              <Data>
                X
              </Data>
            </BoxContent>
          </Box>
        </ContainerBox>
      </Container>
    </AuditorioContainer>
  );
};

export default Auditorio;

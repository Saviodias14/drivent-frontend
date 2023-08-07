import { useState } from 'react';
import { Title, Subtitle, Days, DayButton } from './activities.style';
import Auditorio from './Auditorio';

const days = [{
  id: 1,
  name: 'Sexta, 22/10',
},
{
  id: 2,
  name: 'Sábado, 23/10',
},
{
  id: 3,
  name: 'Domingo, 24/10',
}];

const Activities = () => {
  const [day, setDay] = useState('');

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Subtitle selection={day === ''}>Primeiro, filtre pelo dia do evento:</Subtitle>
      <Days>
        {days.map((item) => (
          <DayButton key={item.id} isSelected={day === item.id} onClick={() => setDay(item.id)} >
            {item.name}
          </DayButton>
        ))}
      </Days>
      <Auditorio active={day} />
    </>
  );
};

export default Activities;

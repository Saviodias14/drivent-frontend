import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthLayout from '../../layouts/Auth';
import useSignUp from '../../hooks/api/useSignUp';
import EventInfoContext from '../../contexts/EventInfoContext';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();
  
  const { eventInfo } = useContext(EventInfoContext);

  const gitAuth = async(event) => {
    event.preventDefault();
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const CLIENT_ID = 'b6f11093042790df58f4';
    const params = new URLSearchParams({
      response_type: 'code',
      scope: 'user',
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:3000/sign-in'
    });
    const authURL = `${GITHUB_URL}?${params.toString()}`;

    try {
      window.location.href = authURL;
      toast('Cadastro realizado!');
    } catch (err) {
      toast('Não foi possível fazer o cadastro!');
    }
  };

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <div>
            <Button type="submit" color="primary" disabled={loadingSignUp}>Inscrever</Button>
            <Button onClick={gitAuth} type="submit" color="primary" disabled={loadingSignUp}>Git Hub</Button>
          </div>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}

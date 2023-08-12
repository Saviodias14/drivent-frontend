import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import AuthLayout from '../../layouts/Auth';
import useSignIn from '../../hooks/api/useSignIn';
import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(async() => {
    const code = searchParams.get('code');
    if (code) {
      try {
        const { data } = await axios.post('http://localhost:4000/auth/git-sign-in', { code });
        setUserData(data);
        toast('Login realizado com sucesso!');
        navigate('/dashboard');
      } catch (error) {
        toast('Não foi possível fazer o login!');
      }
    }
  }, [searchParams]);

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
    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <Button onClick={gitAuth} type="submit" color="primary" fullWidth disabled={loadingSignIn}>Git Hub</Button>
        <p>or</p>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}

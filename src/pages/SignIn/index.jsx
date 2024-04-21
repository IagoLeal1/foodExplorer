import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/';
import { Container, Form, Title } from './styles';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Title>
        <img
          src="../../src/assets/logo.png"
          alt="logo do food explores"
        />
        <h1>food explorer</h1>
      </Title>
      <Form>
        <h2>Faça login</h2>

        <label>Email</label>
        <Input
          type="form"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  );
}

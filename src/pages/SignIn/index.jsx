import { Button } from '../../components/Button';
import { Input } from '../../components/Input/';
import { Container, Form, Title } from './styles';

export function SignIn() {
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
        />
        <label>Senha</label>
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          id=""
        />

        <Button title="Entrar" />
        <a href="../SignUp">Criar uma conta</a>
      </Form>
    </Container>
  );
}
export default SignIn;

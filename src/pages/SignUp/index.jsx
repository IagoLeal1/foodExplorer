import { Button } from '../../components/Button';
import { Input } from '../../components/Input/';
import { Container, Form, Title } from './styles';

export function SignUp() {
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
        <h2>Crie a sua Conta</h2>

        <label>Seu nome</label>
        <Input
          type="form"
          placeholder="Exemplo: Maria da Silva"
        />

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

        <Button title="Criar conta" />
        <a href="../SignIn">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
export default SignUp;

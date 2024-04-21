import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/';
import { Container, Form, Title } from './styles';

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(()  => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar")
      }
    });
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
        <h2>Crie a sua Conta</h2>

        <label>Seu nome</label>
        <Input
          type="form"
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
        />

        <label>Email</label>
        <Input
          type="form"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Criar conta" onClick={handleSignUp}/>
        <Link to="/"> 
          Voltar para o login 
        </Link>
      </Form>
    </Container>
  );
}
export default SignUp;

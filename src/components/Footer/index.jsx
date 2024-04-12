import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <img
          src="../../src/assets/logo-gray.png"
          alt="logo do food explorer"
        />
        <strong>food Explorer</strong>
      </div>
      <div>
        <span>© 2023 - Todos os direitos reservados</span>
      </div>
    </Container>
  );
}

import Menu from '../Menu';
import Search from '../Search';
import { Container, OrdersAndLogOut } from './styles';

export default function HeaderAdmin() {
  return (
    <Container>
      <Menu />

      <div className="Titulo">
        <img
          src="../../src/assets/logo.png"
          alt=""
        />
        <h1>food explorer</h1>
        <span>admin</span>
      </div>

      <div className="SearchDesktop">
        <Search />
      </div>

      <OrdersAndLogOut>
        <div className="Pedidos">
          <button className="orders">
            Novo prato
          </button>
        </div>

        <button className="Exit">
          <img
            src="../../src/assets/Exit.png"
            alt="logout"
          />
        </button>
      </OrdersAndLogOut>
    </Container>
  );
}

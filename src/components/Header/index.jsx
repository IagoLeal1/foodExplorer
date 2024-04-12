import Menu from '../Menu';
import Search from '../Search';
import { Container, OrdersAndLogOut } from './styles';

export default function Header() {
  return (
    <Container>
      <Menu />

      <div className="Titulo">
        <img
          src="../../src/assets/logo.png"
          alt=""
        />
        <h1>food explorer</h1>
      </div>

      <div className="SearchDesktop">
        <Search />
      </div>

      <OrdersAndLogOut>
        <div className="Pedidos">
          <button className="orders">
            <img
              src="../../src/assets/orders.png"
              alt="pedidos"
            />
          </button>
          <span>pedidos (0)</span>
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

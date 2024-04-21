import Menu from '../MenuAdmin';
import Search from '../Search';
import { Container, OrdersAndLogOut } from './styles';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default function HeaderAdmin() {


  const { signOut, user } = useAuth();
  const navigation = useNavigate()

  function handleSignOut(){
    navigation('/');
    signOut();
  }

  function handleNewPlate() {
    navigation(`/new`);
  }


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
        <div className="Pedidos" onClick={() => handleNewPlate()}>
          <button className="orders">
            Novo prato
          </button>
        </div>

        <button className="Exit" onClick ={handleSignOut}>
          <img
            src="../../src/assets/Exit.png"
            alt="logout"
          />
        </button>
      </OrdersAndLogOut>
    </Container>
  );
}

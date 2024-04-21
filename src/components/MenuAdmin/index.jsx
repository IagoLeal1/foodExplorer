import { useEffect, useRef, useState } from 'react';
import { Container, Exit, Top, Wrapper } from './styles';
import Search from '../Search';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
      <div
        className="hamburger-menu"
        ref={menuRef}>
        <button
          className="hamburger-icon"
          onClick={toggleMenu}>
          <img
            src="../../src/assets/Menu.png"
            alt="menu"
          />
        </button>
        {isOpen && (
          <Wrapper>
            <Top>
              <button onClick={toggleMenu}><img src="../../src/assets/Close.png" alt="" /></button>
              <span>Menu</span>
            </Top>

            <Search />
            
            <Exit>
              <button onClick={() => handleNewPlate()}>
                <span>Novo Prato</span>
              </button>
              <button onClick ={handleSignOut}>
                <span>Sair</span>
              </button>
            </Exit>
          </Wrapper>
        )}
      </div>
    </Container>
  );
}

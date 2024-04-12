import { useEffect, useRef, useState } from 'react';
import { Container, Exit, Top, Wrapper } from './styles';
import Search from '../Search';

export default function Menu() {
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
              <button>
                <span>Sair</span>
              </button>
            </Exit>
          </Wrapper>
        )}
      </div>
    </Container>
  );
}

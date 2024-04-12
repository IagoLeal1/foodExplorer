import { useState } from 'react';
import Contador from '../Contador';
import { ContadorDiv, Container, Plate } from './styles';

// eslint-disable-next-line react/prop-types
export default function CardUser({ plateImage, plateName, platePrice }) {
  const [hearth, setHearth] = useState('../../src/assets/EmptyHeart.png');

  const handleClick = () => {
    if (hearth === '../../src/assets/EmptyHeart.png') {
      setHearth('../../src/assets/FullHeart.png');
    } else {
      setHearth('../../src/assets/EmptyHeart.png');
    }
  };

  return (
    <Container>
      <Plate>
        <button
          className="coracao"
          onClick={handleClick}>
          <img
            src={hearth}
            alt="Coração"
          />
        </button>
        <img
          className="prato"
          src={plateImage}
          alt="prato"
        />

        <h2>{plateName}</h2>
        <span>{platePrice}</span>
      </Plate>
      <ContadorDiv>
        <Contador />
        <button className="include">incluir</button>
      </ContadorDiv>
    </Container>
  );
}

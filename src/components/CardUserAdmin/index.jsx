import Contador from '../Contador';
import { ContadorDiv, Container, Plate } from './styles';

// eslint-disable-next-line react/prop-types
export default function CardUserAdmin({ plateImage, plateName, platePrice }) {

  return (
    <Container>
      <Plate>
        <button
          className="pencil">
          <img
            src="../../src/assets/Pencil.png"
            alt="editar prato"
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
      </ContadorDiv>
    </Container>
  );
}

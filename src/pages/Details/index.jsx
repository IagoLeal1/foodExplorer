import {
  BtnDiv,
  ContadorDiv,
  Container,
  DetailsDiv,
  PlateDetails,
  Tags,
} from './styles';

import Contador from '../../components/Contador';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Tag from '../../components/Tag';

export default function Details() {
  return (
    <Container>
      <Header />
      <DetailsDiv>
        <BtnDiv>
          <button>
            <img
              src="../../src/assets/left.png"
              alt="seta pra esquerda"
            />
            voltar
          </button>
        </BtnDiv>

        <img
          src="../../src/assets/Salada Ravanello.png"
          alt="foto do prato"
        />
        <PlateDetails>
          <h1>Salada Ravanello</h1>

          <span>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
          </span>

          <Tags>
            <Tag title={'alface'} />
            <Tag title={'cebola'} />
            <Tag title={'pão'} />
            <Tag title={'pepino'} />
            <Tag title={'rabanete'} />
            <Tag title={'tomate'} />
          </Tags>
        <ContadorDiv>
          <Contador />
          <button>
            <img
              src="../../src/assets/orders.png"
              alt="pedidos"
            />{' '}
            pedir - R$ 25,00
          </button>
        </ContadorDiv>
        </PlateDetails>
      </DetailsDiv>
      <Footer />
    </Container>
  );
}

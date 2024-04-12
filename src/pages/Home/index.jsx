import { Banner, Container } from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Plates from '../../components/Plates';

export default function Home() {
  return (
    <Container>
      <Header />

      <Banner>
        <img
          className="BannerImg"
          src="../../src/assets/Banner.png"
          alt="imagem do banner"
        />
        <div className="BannerText">
          <strong>Sabores inigualáveis</strong>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </Banner>

        <Plates
          title={'Refeições'}
          plateName1st={'Salada Ravanello'}
          plateName2nd={'Gambe'}
          plateName3rd={'Torrada com Parma'}
          plateName4th ={'Espresso'}
        />
        <Plates
          title={'Pratos principais'}
          plateName1st={'Prune'}
          plateName2nd={'Pastry'}
          plateName3rd={'Macaron'}
          plateName4th ={'Espresso'}
        />
        <Plates
          title={'Bebidas'}
          plateName1st={'Suco de Maracuja'}
          plateName2nd={'Suco de Maça'}
          plateName3rd={'Espresso'}
          plateName4th ={'Espresso'}
        />


      <Footer />
    </Container>
  );
}

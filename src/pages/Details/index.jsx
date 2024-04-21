import { useEffect, useState } from 'react';

import {
  BtnDiv,
  ContadorDiv,
  Container,
  DetailsDiv,
  PlateDetails,
  Tags,
} from './styles';

import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import Contador from '../../components/Contador';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Tag from '../../components/Tag';

export function Details() {
  const [data, setData] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  async function handleAdd() {
    const confirm = window.confirm('Deseja realmente editar esse prato?');

    if (confirm) {
      navigate('/Edit');
    }
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }
    fetchPlate();
  }, [params.id]);

  return (
    <Container>
      <Header />
      <DetailsDiv>
        <BtnDiv>
          <button onClick={handleBack}>
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

          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</span>
          <Tags>
            <Tag 
            title={"Salada"} />
          </Tags>
          <ContadorDiv>
            <Contador />
            <button onClick={handleAdd}>
              <img
                src="../../src/assets/orders.png"
                alt="pedidos"
              />
              pedir - R$ 25,00
            </button>
          </ContadorDiv>
        </PlateDetails>
      </DetailsDiv>
      <Footer />
    </Container>
  );
}

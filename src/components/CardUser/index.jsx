import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Contador from '../Contador';
import { ContadorDiv, Container, Plate } from './styles';

import { api } from '../../services/api';


// eslint-disable-next-line react/prop-types
export default function CardUser({ plateImage, plateName, platePrice }) {
  const [hearth, setHearth] = useState('../../src/assets/EmptyHeart.png');
  const [data, setData] = useState(null);

  const handleClick = () => {
    if (hearth === '../../src/assets/EmptyHeart.png') {
      setHearth('../../src/assets/FullHeart.png');
    } else {
      setHearth('../../src/assets/EmptyHeart.png');
    }
  };

  const params = useParams();
  const navigate = useNavigate();

  function handleDetails() {
    navigate(`/Details/`);
  }

  function handleDetails() {
    navigate(`/details/`);
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }
    fetchPlate();
  }, []);

  return (
    <Container>
       {data && (
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

        <button onClick={handleDetails}>
          <h2>{plateName}{' >'}</h2>
        </button>
        <span>{platePrice}</span>
      </Plate>
      )}
      <ContadorDiv>
        <Contador />
        <button className="include">incluir</button>
      </ContadorDiv>
    </Container>
  );
}

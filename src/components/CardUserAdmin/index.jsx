import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Contador from '../Contador';
import { ContadorDiv, Container, Plate } from './styles';

import { api } from '../../services/api';

// eslint-disable-next-line react/prop-types
export default function CardUserAdmin({ plateImage, plateName, platePrice }) {
  const [data, setData] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }
    fetchPlate();
  }, [params.id]);

  function handleDetails() {
    navigate(`/plates/${data.id}`);
  }

  function handleEdit() {
    navigate(`/Edit/`);
  }

  return (
    <Container>
      {data && (
        <Plate >
          <button
            onClick={() => handleEdit()}
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
          <button onClick={() => handleDetails()}>
            <h2>{plateName + ' >'}</h2>
          </button>

          <span>{platePrice}</span>
        </Plate>
      )}
      <ContadorDiv>
        <Contador />
      </ContadorDiv>
    </Container>
  );
}

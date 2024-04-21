/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export default function Search() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [plates, setPlates] = useState([]);

  useEffect(() => {
      async function fetchPlates() {
          const response = await api.get(`/plates?title${searchTerm}`);
          setPlates(response.data)
      }

      fetchPlates()
  
  }, [searchTerm])

  return (
    <Container>
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Container>
  );
}

import { useState } from 'react';
import { Container } from './styles';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div className="button-container">
        <button
          className="btn"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          <img
            className="prato"
            src="../../src/assets/minus.png"
            alt="prato"
          />
        </button>
        <span className="count">0{count}</span>
        <button
          className="btn"
          onClick={() => setCount(count + 1)}>
          <img
            className="prato"
            src="../../src/assets/plus.png"
            alt="prato"
          />
        </button>
      </div>
    </Container>
  );
}

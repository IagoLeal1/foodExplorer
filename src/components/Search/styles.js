import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  margin: 28px;
  border-radius: 5px;
  
  @media(min-width: 1025px) {
    width: 100%;
  }

  > input {
    background: none;
    border: 0;
    padding: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-image: url('../../src/assets/search.png');
    background-repeat: no-repeat;
    background-position: calc(10px + 4px) center;
    padding-left: 42px;
  }
`;
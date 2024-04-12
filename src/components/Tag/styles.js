import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  font-size: 14px;
  font-family: 'Poppins';
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 4px 8px;
  border-radius: 5px;
  margin-right: 24px;
  
  @media (min-width: 1025px) {
    margin-right: 0px;
  }
`;

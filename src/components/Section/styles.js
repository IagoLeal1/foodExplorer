import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  > h2 {
    font-size: 16px;
    font-weight: 300;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

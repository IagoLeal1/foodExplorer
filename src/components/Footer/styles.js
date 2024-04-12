import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: center;
    gap: 6px;
    
    > strong {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 15px;
    }
  }
  > div {
    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      font-size: 12px;
    }
  }
`;

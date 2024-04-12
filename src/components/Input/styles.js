import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  margin-bottom: 8px;
  border-radius: 8px;

  > input {
    @media (min-width: 1024px) {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 5px;
    }

    height: 48px;
    width: 100%;

    padding: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;

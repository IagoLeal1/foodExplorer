import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 425px;

  gap: 24px;

  margin-bottom: 24px;

  @media (min-width: 1025px) {
      margin: 0 123px;
      width: 1122px;
    }

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-left: 18px;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 300;

    @media (min-width: 1025px) {
      font-size: 32px;
    }
  }
`;
export const CardPlates = styled.div`
  display: flex;
  width: 425px;

  @media (min-width: 1025px) {
      height: 462px;
      width: 1122px;
    }
`;
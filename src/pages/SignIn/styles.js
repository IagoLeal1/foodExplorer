import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: strech;
  justify-content: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  > h1 {
    font-size: 37px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > img {
    margin-top: 5px;
    height: 43px;
    width: 43px;
  }
`;

export const Form = styled.form`
  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 16px;
    display: flex;
    width: 476px;

    >h2{
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      margin-bottom: 20px;
    }

  }

  > h2 {
    display: block;
  }

  margin: 45px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    text-decoration: none;
    margin-top: 30px;
  }
`;

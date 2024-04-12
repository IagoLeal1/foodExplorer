import styled from 'styled-components';

export const Container = styled.div`
  width: 210px;
  height: 292px;
  gap: 12px;

  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    width: 448px;
    height: 278px;
  }
`;

export const Plate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  position: relative;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins';
    font-weight: 200;
    font-size: 14px;

    @media (min-width: 1025px) {
      font-size: 24px;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 14px;

    @media (min-width: 1025px) {
      font-size: 32px;
    }
  }

  .coracao {
    display: flex;
    position: absolute;
    margin-left: 150px;
    top: 16px;

    background-color: transparent;
    border: 0;

    @media (min-width: 1025px) {
      margin-left: 262px;
    }
  }

  .prato {
    margin-top: 24px;
    width: 88px;
    height: 88px;

    @media (min-width: 1025px) {
      width: 175px;
      height: 176px;
    }
  }
`;

export const ContadorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1025px) {
      flex-direction: row;
    }

  .include {
    padding: 4px 59px 4px 59px;
    border: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (min-width: 1025px) {
      padding: 12px 24px;
      font-size: 14px;
    }
  }
`;

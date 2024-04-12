import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const DetailsDiv = styled.div`
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 16px;
  margin-bottom: 34px;
  @media (min-width: 1025px) {
    display: flex;
    margin-bottom: 155px;
    margin-top: 100px;
    margin-left: 121px;
  }

  > img {
    width: 264px;
    height: 264px;

    margin: 0 26px 0 26px;

    @media (min-width: 1025px) {
    width: 390px;
    height: 390px;
  }
  }
`;

export const BtnDiv = styled.div`
  margin: 20px 0 16px 0;

  @media (min-width: 1025px) {
    position: absolute;
    top: 128px;
    left: 122px;
  }

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
    font-family: 'Poppins';
    border: 0;

    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const PlateDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 1025px) {
    margin-left: 50px;
    align-items: flex-start;
    justify-content: left;
    text-align: left;
    width: 687px;
  }

  > h1 {
    font-family: 'Poppins';
    font-size: 27px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 25px;
    margin-top: 16px;

    @media (min-width: 1025px) {
      font-size: 40px;
    }
  }

  > span {
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (min-width: 1025px) {
      font-size: 24px;
    }
  }
`;
export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;

  padding: 24px 25px 48px 25px;

  @media (min-width: 1025px) {
    display: flex;
    text-overflow: inherit;
    gap: 12px;
    padding: 24px 0px 48px 0px;
  }
`;
export const ContadorDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  > button {
    padding: 11px 44px;
    width: 100%;
    border: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-family: 'Poppins';
    gap: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 18px;
      height: 15px;
    }
  }
`;

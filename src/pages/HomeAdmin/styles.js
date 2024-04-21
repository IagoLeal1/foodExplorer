import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 1;
`;

export const Banner = styled.div`
  @media (min-width: 1025px) {
    margin-left: 124px;
    margin-right: 124px;
    margin-top: 164px;
  }

  border-radius: 3px;

  margin-top: 44px;
  margin-left: 30px;
  margin-right: 16px;
  margin-bottom: 64px;

  display: flex;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(9, 30, 38, 1) 100%,
    rgba(9, 30, 38, 0) 100%
  );

  .BannerImg {
    @media (min-width: 1025px) {
      width: 656px;
      height: 412px;
      top: 126px;
      left: 96px;

      position: absolute;
      z-index: 2;
    }
    width: 191px;
    height: 149px;
    top: 129px;
    left: 6px;

    position: absolute;
    z-index: 2;
  }

  .BannerText {
    @media (min-width: 1025px) {
      margin-left: 488px;
      padding: 92px 100px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 160px;
    padding: 36px 22px 22px 0px;
    gap: 3px;

    >strong {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 18px;
      font-weight: 600;
      font-family: 'Poppins';
      line-height: 140%;

      @media (min-width: 1025px) {
        font-size: 40px;
    }
    }
    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 12px;
      font-weight: 400;
      font-family: 'Poppins';
      line-height: 140%;

      @media (min-width: 1025px) {
        font-size: 16px;
    }
    }
  }
`;

export const CarrouselContainer = styled.div`
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

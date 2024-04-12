import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 114px;
  gap: 32px;
  padding: 20px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
  }

  .SearchDesktop {
    display: none;
  }

  @media (min-width: 1025px) {
    .SearchDesktop {
      display: flex;
      align-items: center;
      width: 581px;
    }
  }

  .Titulo {
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 0 54px;
    position: relative;

    > img {
      width: 25px;
      height: 25px;
    }

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 21px;
    }
    >span{
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (min-width: 1025px) {
      padding-left: 123px;
      margin: 0;

      >span{
        position: absolute;
        bottom: -17px;
        right: 0;
      }
    }
  }
`;


export const OrdersAndLogOut = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 1025px) {
    padding-right: 123px;
    display: flex;
  }

  .Pedidos {
    display: flex;

    .orders {
      background-color: transparent;
      border: 0;
      > img {
        width: 26px;
        height: 22px;
      }
    }

    @media (min-width: 1025px) {
      gap: 8px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 5px;
      padding: 16px 46px;

      >button{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  .Exit {
    display: none;
    background-color: transparent;
    border: 0;
    > img {
      width: 26px;
      height: 22px;
    }
    @media (min-width: 1025px) {
      display: flex;
    }
  }
`;

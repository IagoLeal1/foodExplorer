import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const NewDiv = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 16px;
  margin-bottom: 34px;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;

    margin-bottom: 155px;
    margin-top: 100px;
    margin-left: 121px;
    margin-right: 121px;
  }

  > h1 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 24px;
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .Wrapper {
    @media (min-width: 1025px) {
      display: flex;
      gap: 32px;
      width: 100%;
    }
  }

  .PlateImg {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 16px 14px;
    border-radius: 8px;

    @media (min-width: 1025px) {
      display: flex;
      justify-content: center;
      width: 229px;
      padding: 16px 14px;
      height: 48px;
    }
    
    >img{
      margin-right: 8px;
    }

    >input{
      opacity: 0;
      position: absolute;
    }

  }

  .AllInput {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 16px 14px;
    border-radius: 8px;

    @media (min-width: 1025px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 463px;
      height: 48px;
      padding: 12px 32px;
    }
  }

  #Category {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 16px 14px;
    border-radius: 8px;

    @media (min-width: 1025px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 363px;
      height: 48px;
      padding: 12px 32px;
    }
  }

  .Description {
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 16px 14px;
    border-radius: 8px;
    width: 364px;
    height: 172px;
    resize: none;
    width: 100%;
  }

  > img {
    width: 264px;
    height: 264px;

    margin: 0 26px 0 26px;

    @media (min-width: 1025px) {
      width: 390px;
      height: 390px;
    }
    .PlateImgBtn {
      #PlateImgInput {
        > input {
          display: none;
        }
      }
    }
  }

  >button{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 364px;
    padding: 12px 0;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    @media (min-width: 1025px) {
    display: flex;
    justify-content: flex-end;
    width: 172px;
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
    font-size: 16px;
    font-family: 'Poppins';
    border: 0;

    display: flex;
    align-items: center;
    gap: 6px;

    > img {
      width: 8px;
      height: 15px;
    }
  }
`;

export const SaveBtn = styled.div`
  display: flex;
  gap: 32px;

  @media (min-width: 1025px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  > button {
    width: 364px;
    padding: 12px 0;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
  }

  .Save {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 172px;
  }
`;

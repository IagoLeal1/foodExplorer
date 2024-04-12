import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  .button-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    .btn{
      display: flex;
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    >span{
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  `
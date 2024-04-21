import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  z-index: 999;

 >div{
  @media (min-width: 1025px) {
      display: none;
    }
  >button{
    background-color: transparent;
    border: 0;
  }
 }
`

export const Wrapper = styled.div`
  left: 0;
  position: fixed;
  top: 0;
  transition: left 0.3s ease-in-out;
  
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 428px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Top = styled.div`
  display: flex;
  padding: 28px 28px 0 28px;
  gap: 16px;
  align-items: center;

  height: 114px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  >button{
    background-color: transparent;
    border: 0;
  }

  >span {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 21px;
  }
`;



export const Exit = styled.div`
margin: 28px;
border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
display: flex;
flex-direction: column;
align-items: flex-start;

>button{
  background: none;
  border: none;
  margin: 0 10px 10px 10px;

  >span{
    font-family: 'Poppins';
    font-weight: 100;
    font-size: 24;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
}
`;
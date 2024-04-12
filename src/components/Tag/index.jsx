/* eslint-disable react/prop-types */
import { Container } from "./styles";

export default function Tag({ title, ...rest }){
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}
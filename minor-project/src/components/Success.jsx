import styled from "styled-components"

const Container = styled.div``;
const Message = styled.div``;

const Success = ({message}) => {
  return (
    <Container>
      <Message>
        {message};
      </Message>
      
    </Container>
  )
}

export default Success

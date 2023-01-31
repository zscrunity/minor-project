import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Top = styled.div``;
const Bottom = styled.div``;


const WishList = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title> Your Wishlist</Title>
        <Top></Top>
        <Bottom></Bottom>
      </Wrapper>

      <Footer />
    </Container>
  )
}

export default WishList

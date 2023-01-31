import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
   margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.div`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MINOR PROJECT</Logo>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem aut excepturi officiis quia cum doloremque accusantium repellendus ipsam enim. Consequuntur, totam. Dolor quasi cupiditate quis architecto corrupti at facere?</Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon >
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>       
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Browse Properties</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Our Services</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms & Conditions</ListItem>     
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:'10px'}}/>+1 234 56 78</ContactItem> 
        <ContactItem><Phone style={{marginRight:'10px'}}/>722 Roxham Path, East London 98432</ContactItem> 
        <ContactItem><MailOutline style={{marginRight:'10px'}}/>contact@bct.proj</ContactItem> 
      </Right>
    </Container>
  )
}

export default Footer

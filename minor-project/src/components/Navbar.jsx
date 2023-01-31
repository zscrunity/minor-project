import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div `
  height: 60px;
  ${mobile({ height: '50px'})};
` ;

const Wrapper = styled.div `
  margin-left: 200px;
  margin-right: 200px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: '10px 0px'})};
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;

` ;

const Middle = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const NavAttributes = styled.div`
  font-size: 16px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Sign = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            Minor Project
          </Logo>
        </Left>
        <Middle>
          <NavAttributes>Home</NavAttributes>
          <NavAttributes>About Us</NavAttributes>
          <NavAttributes>Property</NavAttributes>
          <NavAttributes>Contact Us</NavAttributes>
        </Middle>
        <Right>
          {user ? 
            (<>
              <h1> {user.firstname}</h1>
            </>
            ) : (
              <>
              <Sign>REGISTER</Sign>
              <Sign>SIGN IN</Sign> 
              </>
            )} 
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

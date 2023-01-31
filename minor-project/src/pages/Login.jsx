import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Error from '../components/Error';
import Loading from '../components/Loading';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    #e894f67f,
    #e894f67f
    ),
    url('https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111357.jpg?w=1060&t=st=1674802304~exp=1674802904~hmac=e924ff5a869c0212929ba986cb4127c70d69c23cc949c792e40f22fc52897d8e') center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #E0B0FF;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const [loading,setloading] = useState(false);
  const [error,seterror] = useState();

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const user = {
      username,
      password
    };
    try {
      setloading(true);
      const result = (await axios.post('/api/users/login', user)).data;
      setloading(false);
      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href='/'

    } catch (error) {
      
      console.log(error);
      setloading(false);
      seterror(true);
    }
  };

  return (
    <Container>
      <Wrapper> 
        {loading && (<Loading/>)}
        {error && (<Error message='Invalid Credentials'/>)}
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            value={username}
            placeholder='Username'
            onChange={(event) => setusername(event.target.value)}
            />
          <Input 
            type='password'
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            placeholder='Password'/>
          <Button>LOGIN</Button>
          <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
  </Container>
  )
}

export default Login

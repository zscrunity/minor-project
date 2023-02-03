import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

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
  width: 40%;
  padding: 20px;
  background-color: #E0B0FF;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const[firstname,setfirstname] = useState('');
  const[lastname,setlastname] = useState('');
  const[username,setusername] = useState('');
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const[cpassword,setcpassword] = useState('');

  const [loading,setloading] = useState(false);
  const [error,seterror] = useState();
  const [success,setsuccess] = useState();


  const handleregister = async (event) => {
    event.preventDefault();
    if(password===cpassword)
    {
      const user = {
        firstname,
        lastname,
        username,
        email,
        password,
        cpassword
      } 
      try {
        setloading(true);
        const result = await axios.post('/api/auth/register',user).data;
        setloading(false);
        setsuccess(true);

        setfirstname('');
        setlastname('');
        setusername('');
        setemail('');
        setpassword('');
        setcpassword('');
        
        
      } catch(error) {
        console.log(error);
        setloading(false);
        seterror(true);
      };

      console.log(user);
    }
    else
    {
      alert('Passwords not matched');
    }
  };

  return (
    <Container>
      <Wrapper> 
        {loading && (<Loading />)}
        {error && (<Error />)}
        {success && (<Success message='Registration Success' />)}

        <Title>Create An Account</Title>
        <Form onSubmit={handleregister} >
          <Input placeholder='First Name' value={firstname}
            onChange={(event) => setfirstname(event.target.value)}/>
          <Input placeholder='Last Name' value={lastname}
             onChange={(event)=>setlastname(event.target.value)}/>
          <Input placeholder='Username' value={username}
             onChange={(event)=>setusername(event.target.value)}/>
          <Input placeholder='E-mail' type='email' 
            value={email} onChange={(event)=>setemail(event.target.value)}/>
          <Input placeholder='Password' type='password' value={password} 
            onChange={(event)=>setpassword(event.target.value)}/>
          <Input placeholder='Confirm Password' type='password' value={cpassword}
             onChange={(event)=>setcpassword(event.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <br></br>
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

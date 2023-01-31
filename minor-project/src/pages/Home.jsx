// import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
// import axios from 'axios';


const Home = () => {
  // const [rooms,setrooms] = useState([]);
  // const [loading,setloading] = useState();
  // const [error,seterror] = useState();

  // useEffect( () => {
  //   const fetchdata = async() => {
  //   try{
  //     const data = (await axios.get('/api/rooms/getallrooms')).data;

  //     setloading(true);

  //     setrooms(data);

  //     setloading(false);
  //   } catch (error) {
  //       seterror(true);
  //       console.log(error);
  //       setloading(false);
  //   } }
  // }, []);

  return (
    <div>
      <Navbar />
      <Slider /> 
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;

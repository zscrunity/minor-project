import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Property from "./Property";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PropertyList = ({cat,filter,sort}) => {
  console.log(cat,filter,sort);
  const [properties,setproperties] = useState([]);
  const [filteredProperty,setfilteredProperty] = useState([]);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get( cat ? `/api/properties?category=${cat}` : '/api/properties');
        console.log(res);
      } catch(err) {}
    };
    getProperty();
  },[]);

  useEffect(() => {
    cat && setfilteredProperty (
      properties.filter((item) => 
        Object.entries(filter).every(([key,value]) => 
          item[key].includes(value)
        )      
      )
    )
  },[properties,cat,filter])

  return (
    <Container>
      {filteredProperty.map((item) => (
        <Property item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default PropertyList

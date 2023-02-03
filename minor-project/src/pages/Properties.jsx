import { useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PropertyList from "../components/PropertyList";
import { useLocation } from 'react-router-dom'

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Properties = (e) => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter,setfilter] = useState({});
  const [sort,setsort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  console.log(filter);

  return (
    <Container>
        <Navbar/>
        <Title> Property</Title>
        <FilterContainer>
          <Filter ><FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select >
          <Select name='size' onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>          
          </Select>
          </Filter>
          <Filter ><FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setsort(e.target.value)}>
              <Option value='newest'>Newest</Option> 
              <Option value='asc'>Cost (Asc)</Option>
              <Option value='desc'>Cost (Desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <PropertyList cat={cat} filter={filter} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Properties

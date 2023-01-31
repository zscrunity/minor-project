import axios from 'axios';
import { useState } from 'react';
import './mockform.css';


const MockFom = () => {
  const[propertyname,setpropertyname] = useState('');
  const[category,setcategory] = useState('');
  const[priceprefix,setpriceprefix] = useState('');
  const[phone,setphone] = useState('');
  const[price,setprice] = useState('');
  const[desc,setdesc] = useState('');
  const[location,setlocation] = useState('');
  const[area,setarea] = useState('');
  const[imageurl,setimageurl] = useState('');

  const handleregister = async (event) => {
    event.preventDefault();
      const property = {
        propertyname,
        category,
        priceprefix,
        phone,
        price,
        desc,
        location,
        area,
        imageurl
      } 

      try {
        const result1 = await axios.post('/api/properties/propertyadd', property).data;
        setpropertyname('');
        setcategory('');
        setpriceprefix('');
        setphone('');
        setprice('');
        setdesc('');
        setlocation('');
        setarea('');
        setimageurl('');

      } catch(error) {
        console.log(error);
       
      };

      console.log(property);
    };

  return (
    <>
    <div>
<form onSubmit={handleregister}>
  <div>
    <label htmlFor="property-name">Property Name:</label>
    <input type="text" id="property-name" name="property-name" value={propertyname}
    onChange={(event) => setpropertyname(event.target.value)}/>
  </div>
  <div>
    <label htmlFor="category">Category:</label>
    <select id="category" name="category" value={category}
    onChange={(event) => setcategory(event.target.value)}>
      <option selected>Choose Category</option>
      <option value="flat">Flat</option>
      <option value="apartment">Apartment</option>
      
    </select>
  </div>
  <div>
    <label htmlFor="priceprefix">Price Prefix:</label>
    <select id="priceprefix" name="priceprefix" value={priceprefix}
     onChange={(event) => setpriceprefix(event.target.value)}>
      <option selected>Choose Price Prefix</option>
      <option value="per-month">Per Month</option>
      <option value="per-year">Per Year</option>
      
    </select>
  </div>
  <div>
    <label htmlFor="phone-number">Phone Number:</label>
    <input type="text" id="phone-number" name="phone-number" value={phone}
     onChange={(event) => setphone(event.target.value)}/>
  </div>
  <div>
    <label htmlFor="price">Price:</label>
    <input type="text" id="price" name="price" value={price}
     onChange={(event) => setprice(event.target.value)}/>
  </div>
  <div>
    <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" value={desc}
     onChange={(event) => setdesc(event.target.value)}></textarea>
  </div>
  <div>
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" name="location" value={location}
     onChange={(event) => setlocation(event.target.value)}/>
  </div>
  <div>
    <label htmlFor="area">Area:</label>
    <select id="area" name="area" value={area}
     onChange={(event) => setarea(event.target.value)}>
      <option selected>Choose Area</option>
      <option value='kathmandu'>Kathmandu</option>
      <option value="Lalitpur">Lalitpur</option>
      
    </select>
  </div>
  <div>
    <label htmlFor="imageurls">Image URLs:</label>
    <input type="text" id="imageurls" name="imageurls" value={imageurl}
     onChange={(event) => setimageurl(event.target.value)}/>
  </div>
  <div>
    <input type="submit" value="Add Property"/>
  </div>
</form>

    </div>
    </>
  )
}

export default MockFom

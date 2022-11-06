import React, { useState,useEffect } from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'
import { mobile } from '../responsive';
import axios from 'axios';

const Container = styled.div` 
    padding: 20px;
    ${mobile({padding:"0px"})};
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-between;
`;

const Products = ({cat,filter,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`);
        setProducts(res.data);
      } catch(err) {}
    }
    getProducts();
  },[cat]);
  
  useEffect( () => {
    cat && setFilteredProducts(
      products.filter((item) => 
      Object.entries(filter).every(([key, value]) => 
        item[key].includes(value)
      ))
    );
  }, [products, cat, filter]);

  useEffect( () => {
    if((sort === "newest")) {
      
        filteredProducts.sort((a,b) => b.createdAt.localeCompare(a.createdAt)) //https://stackoverflow.com/questions/71791677/cant-sort-items-by-createdat
     
    }
    else if((sort === "asc")) {

      filteredProducts.sort((a,b) => a.price - b.price) //https://stackoverflow.com/questions/71791677/cant-sort-items-by-createdat
      
    }
    else if((sort === "dsc")) {
      filteredProducts.sort((a,b) => b.price - a.price)
    }
    setFilteredProducts(filteredProducts);
  },[sort])

  console.log(filteredProducts);
  return (
    <Container>
        {
          cat ? filteredProducts.map(item =><Product item={item} key={item.id}/>)
          : products.slice(0,8).map(item =><Product item={item} key={item.id}/>) 
        }
    </Container>
  )
}

export default Products
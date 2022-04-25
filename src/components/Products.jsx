import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div` 
    padding: 20px;
    ${mobile({padding:"0px"})};
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item =><Product item={item} key={item.id}/>)

        }
    </Container>
  )
}

export default Products
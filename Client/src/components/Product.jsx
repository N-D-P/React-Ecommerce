import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

`;

const Container = styled.div` 
    flex : 1;
    margin: 5px;
    min-width: 380px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    position: relative;
    &:hover ${Info}{
        opacity: 1 ;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
    cursor: pointer;

`;


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} >
          <SearchOutlined />
          </Link>
          
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

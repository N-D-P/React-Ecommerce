import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import  {Badge}  from '@material-ui/core'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})};
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    ${mobile({padding:"10px 0px"})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({display:"none"})};
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})};
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"25px"})};
`


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})};
`

const Menuitem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px" , marginLeft:"10px"})};
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:"gray",fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    LETAP.
                </Logo>
            </Center>
            <Right>
                <Menuitem>REGISTER</Menuitem>
                <Menuitem>SIGN IN</Menuitem>
                <Link to="/cart">
                    <Menuitem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </Menuitem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
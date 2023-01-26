import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout"
import { useState,useEffect } from "react";
import publicRequest from "../requestMethods"
import axios from "axios";

const KEY = process.env.REACT_APP_STRIPE;


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  ${mobile({padding:"10px"})};

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({fontSize:"17px"})};

`;

const TopTexts = styled.div`
  font-size: 20px;
  font-weight: 500;
  ${mobile({display:"none"})};

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})};

`;

const Info = styled.div`
  flex: 2;
`;



const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})};

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  margin: 0px 10px;
  font-size: 24px;
  ${mobile({margin:"5px 20px"})};

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
  ${mobile({marginBottom:"20px"})};

`;

const Hr = styled.hr` 
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
  flex: 0.7;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 43vh;

`;

const SummaryTitle = styled.h1` 
    font-weight: 300;
`;

const SummaryItem = styled.div` 
    margin: 30px 0px;
    display: flex;
    font-weight: 200;
    font-size: 20px;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "550"};
    font-size: ${props => props.type === "total" && "25px"};


`;
const SummaryItemText = styled.span` 
`;
const SummaryItemPrice = styled.span` 
`;
const SummaryButton = styled.button` 
font-weight: 250;
font-size: 20px;
padding: 10px;
background-color: black;
color: white;
border: none;
width: 100%;
`;

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const [stripeToken,setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/api/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: 100,
        });
        history.push("/success",{data:res.data});

      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.total>=1 && makeRequest();
  }, [stripeToken,cart.total,history]);

  console.log(stripeToken);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              cart.products?.map(product => (
                <Product>
                <ProductDetail>
                  <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                  <Details>
                    <ProductName>
                      <b>Product:</b>{product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>{product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>SIZE:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
              ))
            }

          </Info>
          <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 6.80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Special Discount</SummaryItemText>
                  <SummaryItemPrice>$ -6.80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total"> 
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemText>$ {cart.total}</SummaryItemText>
              </SummaryItem>
              <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >Checkout Now</StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

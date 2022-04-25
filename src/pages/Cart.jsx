import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

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
  height: 40vh;

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
            <Product>
              <ProductDetail>
                <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>DENIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>921346114
                  </ProductId>
                  <ProductColor color="brown" />
                  <ProductSize>
                    <b>SIZE:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> BASEBALL CAP 
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>921343476
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 10</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 50</SummaryItemPrice>
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
                  <SummaryItemText>$ 50</SummaryItemText>
              </SummaryItem>
              <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

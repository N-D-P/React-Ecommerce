import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation} from "react-router-dom" 
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection:"column" , padding:"10px"})};

`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})};

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"0px 10px"})};

`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})};

`; 

const Filter = styled.div` 
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span` 
    font-size: 20px;
    font-weight: 200;
`;

const FilterColo = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 10px;
    cursor: pointer;
`;

const FilterSize = styled.select` 
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option` `;

const AddContainer = styled.div` 
    width: 50%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})};

`;
const AmountContainer = styled.div` 
    display: flex;
    align-items: center;
    font-weight: 700;

`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 30%;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button` 
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        /* background-color: #f8f4f4; */
        background-color: teal;
        color: white;
    }
`;



const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProduct] = useState([]);
  const [quantity,setQuantity] = useState(1);
  const [color,setColor] = useState("");
  const [size,setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/find/${id}`);
        setProduct(res.data);
      } catch(err) {}
    }
    getProducts();
  },[id]);
  
  const handleClick = () => {
    //update cart
    dispatch(addProduct({...product, quantity, color, size}));
    
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
              <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {product.color?.map((c) => (
                        <FilterColo onClick={()=>setColor(c)} color={c} key={c}/>                        
                  ))}
              </Filter>
              <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize onChange={(e)=>setSize(e.target.value)}>
                      {product.size?.map((c) => (
                        <FilterSizeOption key={c}>{c}</FilterSizeOption>                        
                      ))}
                  </FilterSize>
              </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove onClick={() => setQuantity(quantity>1?quantity-1:quantity)}/>
                  <Amount>{quantity}</Amount>
                  <Add  onClick={() => setQuantity(quantity+1)}/>
              </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

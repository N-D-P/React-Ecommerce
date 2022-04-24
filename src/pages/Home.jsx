import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
    height: 60px;
 `

const Home = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Home
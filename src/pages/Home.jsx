import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'

const Container = styled.div`
    height: 60px;
 `

const Home = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Slider />
    </Container>
  )
}

export default Home
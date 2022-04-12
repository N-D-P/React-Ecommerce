import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: coral;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: 10px;
    margin:auto; /*set the margin property to auto to horizontally center the element within its container.*/

`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {
  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

const Container=styled.main`
min-height:  calc(100vh - 80px);
padding:0 40px;
overflow-x:hidden;
`
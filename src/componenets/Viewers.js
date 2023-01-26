import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
   <Container>
       <Wrap>
        <img src ="/images/viewers-disney.png" />
       </Wrap>
       <Wrap>
        <img src ="/images/viewers-marvel.png" />
       </Wrap>
       <Wrap>
        <img src ="/images/viewers-national.png" />
       </Wrap>
       <Wrap>
        <img src ="/images/viewers-pixar.png" />
       </Wrap>
       <Wrap>
        <img src ="/images/viewers-starwars.png" />
       </Wrap>
   </Container>
  )
}

export default Viewers


const Container=styled.div`
margin-top:20px;
padding:30px 0px 26px;
display:grid;
cursor:pointer;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr))`

const Wrap=styled.div`
border-radius:10px;
border:3px solid rgba(249,249,249,0.3);
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    transform:scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
}`
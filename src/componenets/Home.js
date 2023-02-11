import React  from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import Login from './Login'
import { useUserContext } from '../Contexthook'
import Signup from './Signup'




function Home() {

const {login,signup}=useUserContext();



  return (
    <Container>
        <ImageSlider />
        <Loginapage loginvalue={login}><Login /></Loginapage>
        <Signuppage signupvalue={signup}><Signup /></Signuppage>
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
position:relative;


`
const Loginapage=styled.div`
background:rgba(0,0,0,0.55);
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index:10;
visibility:${props=>`${props.loginvalue ? "visible":"hidden"}`};
opacity:${props=>`${props.loginvalue ? "1":"0"}`};
`
const Signuppage=styled.div`
background:rgba(0,0,0,0.55);
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index:10;
visibility:${props=>`${props.signupvalue ? "visible":"hidden"}`};
opacity:${props=>`${props.signupvalue ? "1":"0"}`};
`
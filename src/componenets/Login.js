import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Page>
          <Close><i class="uil uil-multiply"></i></Close>
          <Detail>
            <Log>Login to continue</Log>
            <Email><div>Have a Email account?</div></Email>
            <Or>or</Or>
            <Mobile>
              <Code><div>+91</div></Code>
             <Line><div>|</div></Line>
              <Number><input type="text" placeholder='Enter you mobile number'/></Number>
            </Mobile>
          </Detail>
        </Page>
    </Container>
  )
}

export default Login

const Container=styled.div`
display:flex;
height:calc(100vh - 80px);
justify-content:center;
z-index:1;
margin-top:4rem;
`

const Page=styled.div`
width:300px;
height:60%;
color:white;
position:relative;
background:linear-gradient(to bottom, #141b29, #0c111b 300px);`

const Close=styled.div`
position:absolute;
cursor:pointer;
color:white;
top:1rem;
right:1rem;`



const Detail=styled.div`
margin-top:6rem;
display:flex;
height:100%;
flex-direction:column;
row-gap:2rem;
align-items:center;

`
const Log=styled.div`
text-align:initial;`


const Email=styled.div`
cursor:pointer;
background:rgba(31,127,224,0.1);
height:45px;

display:flex;
justify-content:center;
align-items:center;
border-radius:.20rem;
color:blue;


width:250px;
border:1px solid blue;
`
const Or=styled.div``



const Mobile=styled.div`
display:flex;
column-gap:.4rem;
border-bottom:2px solid blue;

`


const Code=styled.div`
display:flex;
justify-content:center;

align-items:center;
height:45px;`

const Line=styled.div`
display:flex;
justify-content:center;
align-items:center;
color:lightgray;`

const Number=styled.div`
height:45px;
width:250px;
display:flex;
justify-content:center;
align-items:center;
background:transparent;
input{
  height:45px;
  width:280px;
  border:transparent;
  font-size:1rem;
  color:white;
  background:transparent;
}`
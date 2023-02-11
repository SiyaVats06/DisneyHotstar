import React ,{useState}from 'react'
import styled from 'styled-components'
import {auth } from "../firebase"
import {  } from 'firebase/auth';
import { useUserContext } from '../Contexthook';





function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {setname,Signup,setlogin,setsignup}=useUserContext()
const handle= async (e)=>{
  e.preventDefault();
  await Signup(email,password)
  console.log(Signup);
  setname(email);
  setsignup(false);
  setemail("")
  setpassword("")
}
  
  return (
    <Container>
        <Page>
          <Close onClick={()=>{
                    setsignup(false)
                }}><i class="uil uil-multiply"></i></Close>
          <Detail>
            <Log>Signup to continue</Log>
            
         
            <Mobile>
            <Number><input type="text" placeholder='Enter you  Email' value={email} onChange={(e)=>{
              setemail(e.target.value)
            }}/></Number>
            
              <Number><input type="password" placeholder='Enter you  Password' value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }}/></Number>
            </Mobile>
            <Submit  onClick={ handle}><div>Submit</div></Submit>
            <Email onClick={()=>{
              setsignup(false);
              setlogin(true)
            }}><div>Already have an account?</div></Email>
          </Detail>
        </Page>
    </Container>
  )
}

export default Signup

const Container=styled.div`
display:flex;
height:calc(100vh - 80px);
justify-content:center;
z-index:1;
margin-top:4rem;
`

const Page=styled.div`
width:450px;
height:70%;
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
const Submit=styled(Email)`
border-color:white;
width:100px;
text-transform:uppercase;
height:35px;
color:white;`



const Mobile=styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;


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
border-bottom:2px solid blue;
input{
  height:45px;
  width:280px;
  border:transparent;
  font-size:1rem;
  color:white;
  background:transparent;
}`
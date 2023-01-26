import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
    <MovieDetail>
    <Info>
    <About>
      <Sunscribe>SUBSCRIBER</Sunscribe>
      <Name>Avatar</Name>
      <Describe>Former Mary jakie sully dhjj hdjksah in the  water live like amidens,he ultimately finds himself torn between two worlds</Describe>
    </About>
    <Watch>
      <WatchMovie>
        <a><i class="uil uil-play"></i></a>
        <div>Watch Movie</div>
      </WatchMovie>
      <Share>
         <Each>
          <a><i class="uil uil-plus"></i></a>
          <div>WATCHLIST</div>
         </Each>
         <Each><a><i class="uil uil-share-alt"></i></a>
         <div>SHARE</div></Each>
      </Share>
    </Watch>
    </Info>
    <Image>
      <img src='/images/avatar.webp' alt=''/>
    </Image>

    </MovieDetail>
    </Container>
  )
}

export default Detail

const Container=styled.div`
cursor:pointer;
border-radius:.25rem;
height:calc(100vh - 80px);
padding:0 4vw;
display:flex;
flex-direction:column;
row-gap:1rem`



const MovieDetail=styled.div`

min-height:20vh;
display:flex;

`


const Info=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
color:white;
padding:60px 2vw;
width:50%`

const Image=styled.div`
width:50%;
img {
  width:100%;
  height:100%;
  object-fit:cover
}`

const About=styled.div`
display:flex;
flex-direction:column;
row-gap:.5rem;`



const Sunscribe=styled.div`
color:yellow;
font-size:.8rem;
font-weight:500;`


const Name=styled.div`
font-size:2rem;
font-weight:400;`

const Describe=styled.div`
fnt-size:1.4rem;
font-weight:300`


const Watch=styled.div`
display:flex;
justify-content:space-between;`


const WatchMovie=styled.div`
display:flex;
column-gap:.4rem;
font-size:1.2rem;
font-weight:400`


const Each=styled.div`
display:flex;
flex-direction:column;
row-gap:.1rem;
align-items:center;
a{
  font-size:1.5rem;
}
div{
  font-size:.8rem;
}`

const Share=styled.div`
display:flex;
gap:1rem`

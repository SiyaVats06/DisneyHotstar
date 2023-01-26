import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <Nav>
            <Left>
                <Ham><i class="uil uil-bars"></i></Ham>
                <Logo src="images/hotstarlogo.svg" />
                <MenuBar>
                    <a>
                        <span>TV</span>
                    </a>
                    <a>
                        <span>Movies</span>
                    </a>
                    <a>
                        <span>Sports</span>
                    </a>
                    <a>
                        <span>Disney+</span>
                    </a>
                    <a>
                        <span>KIDS</span>
                    </a>

                </MenuBar>

            </Left>

            <Right>
                <SearchBar>
                    <input type="text" placeholder="search " />
                </SearchBar>
                <Subscribe>
                    <a>SUBSCRIBE</a>
                </Subscribe>
                <Login><a>LOGIN</a></Login>
            </Right>



        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height:80px;
background:linear-gradient(to bottom, #141b29, #0c111b 300px);
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
overflow-x:hidden`

const Ham = styled.div`
color:rgba(255, 255, 255, 0.8);;
font-size:1.5rem
`

const Logo = styled.img`
width:100px;
height:70px;
`

const MenuBar = styled.div`
display:flex;
color:rgba(255, 255, 255, 0.8);
align-items:center;
column-gap:1.8rem;
padding:0 25px;
a{
    font-size:1rem;
    cursor:pointer;
    font-weight:400;
}
a:hover{
    color:white;
}
`

const SearchBar = styled.div`
input{
    background:transparent;
    border:transparent;
    border-bottom:1px solid white;
}`
const Subscribe = styled.div`
width:100px;
display:flex;
border-radius:.25rem;
justify-content:center;
align-items:center;
height:30px;
background:#1f80e0;;
color:white;

font-size:.8rem;
font-weight:500`


const Login = styled.div`
color:rgba(255, 255, 255, 0.8);
font-weight:600`


const Left = styled.div`
display:flex;
align-items:center;
column-gap:.7rem`

const Right = styled(Left)`
column-gap:1.4rem`
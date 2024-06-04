import React from 'react'
import styled from 'styled-components'
import logo from '../logo.png'
import { useLocation, useNavigate } from 'react-router-dom'


const Nav = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/signup');
  }

  return (
    <>
      <Navbar>
        <div>
        <img src={logo} alt='OZ로고' height={'28px'} style={{cursor: 'pointer'}}
        onClick={() => (window.location.href = "/")}
        />
        <div>
          <Login onClick={handleRegister}
          style={{marginRight:'8px'}}>회원가입</Login>
          <Login onClick={handleLogin} >로그인</Login>
        </div>
        </div>
      </Navbar>
    </>
  )
}

const Login = styled.a`
  all: unset;
  cursor : pointer;
  height: 100%;
  color: rgba(200, 200, 200, 0.8);
  border:1px solid rgba(200, 200, 200, 0.8);
  border-radius : 16px;
  padding : 0.375rem .875rem;
  transition : .2s ease-in-out;
  &:hover {
    border:1px solid #fff;
    color:#fff;
  }

`

const Navbar = styled.nav`
  z-index:3;
  position: fixed;
  top:0;
  left:0;
  right:0;
  height:58px;
  background-color:rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  box-sizing : border-box;
 
  
  > div {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px;
    height:100%;
    box-sizing : border-box;
  }
`

export default Nav
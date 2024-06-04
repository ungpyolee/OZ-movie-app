import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase'


const Nav = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('')
  const { pathname } = useLocation()

  const auth = getAuth(app);

  

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user && pathname === '/') {
  //       navigate('/main')
  //       // ...
  //     } else if(!user) {
  //       // User is signed out
  //       // ...
  //       navigate('/')
  //     }
  //   });
  // }, [auth, navigate, pathname])
 
  // search event
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/signup');
  }

  const handleLogo = (e) => {
    navigate('/main');
  }



  return (
    <>
      <Navbar>
        <div>
          <img src={logo} alt='OZ로고' height={'28px'} style={{ cursor: 'pointer' }}
            onClick={handleLogo}
          />
          <Input type='text' placeholder="영화를 검색해주세요." value={searchValue}
            onChange={handleChange} />

          <div>
            <Signup onClick={handleRegister}
              style={{ marginRight: '8px' }}>회원가입</Signup>
            <Login onClick={handleLogin} >로그인</Login>
          </div>
        </div>
      </Navbar>
    </>
  )
}

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  color: white;
  padding: 9px;
  border-radius : 16px;
  border:1px solid rgba(200, 200, 200, 0.8);
  transition : .2s ease-in-out;
  &:hover {
    border:1px solid #fff;
  }
  @media screen and (max-width: 768px) {
    left: 70px;
    transform: translate(0, 0);
  }
`

const Signup = styled.a`
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
  @media screen and (max-width: 440px) {
    display:none;
  }
`

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
  z-index:2;
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
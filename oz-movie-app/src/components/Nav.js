import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../firebase'
import { AuthStateListener } from '../services/auth_state_listener';
import useUserStore from '../userStore';
import imgUserDefault from '../assets/icon-userDefault.png'

const Nav = () => {
  const { initialUserData, setUserData } = useUserStore();
  
  const navigate = useNavigate();
  const [ searchValue, setSearchValue ] = useState('')
  const { pathname } = useLocation()
  
  useEffect(() => {
    if(auth){
      setUserData(auth.currentUser);

    }
  }, [setUserData, initialUserData])
  

  AuthStateListener();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert('로그아웃 되었습니다.')
      navigate('/')
    }).catch((error) => {
      alert('로그인 되어있지 않습니다.')
    });
  }

  // search event
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }

  const handleLogin = () => navigate('/');
  const handleRegister = () => navigate('/signup');
  const handleLogo = () => navigate('/main');



  const renderAuthButtons = () => (
    <>
      <div>
      <Signup onClick={handleRegister} style={{ marginRight: '8px' }}>회원가입</Signup>
      <Login onClick={handleLogin}>로그인</Login>
      </div>
    </>
  );

  const renderSearchAndLogout = () => (
    <>
      <Input type='text' placeholder="영화를 검색해주세요." value={searchValue} onChange={handleChange} />
      <div>
      <UserInfo>
      <UserImg src={initialUserData?.photoURL || imgUserDefault} alt={initialUserData?.displayName || ''}></UserImg>
      <DropDown>
            <li onClick={handleSignOut}>
              Sign Out
            </li>
            <li>
              myPage
            </li>
          </DropDown>
      </UserInfo>
      </div>
    </>
  );

  return (
    <>
      <AuthStateListener />
      <Navbar>
        <div>
          <img src={logo} alt='로고' height='28px' style={{ cursor: 'pointer' }} onClick={handleLogo} />
          {['/', '/signup'].includes(pathname) ? renderAuthButtons() : renderSearchAndLogout()}
        </div>
      </Navbar>
    </>
  );
};

export default Nav;

const DropDown = styled.ul`
  position:absolute;
  right: 0;
  top: 28px;
  padding: 1rem 0;
  width:120px;
  border:1px solid #fff;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  box-sizing:border-box;
  border-radius : 12px;
  display:none;
  > li {
    box-sizing:border-box;
    width:100%;
    padding : .75rem 1rem;
    cursor:pointer;
    transition : .1s ease-in-out;
    &:hover{
      background-color :rgba(255, 255, 255, 0.2)
    }
  }
  `
  const UserImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
  `
  const UserInfo = styled.div`
  cursor:pointer;
  width:32px;
  height:32px;
  border:1px solid #fff;
  color : #fff;
  border-radius :50%;
  box-sizing : border-box;
  position :relative;
  &:hover {
    ${DropDown} {
      display:block;
    }
  }
`
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
`;

const AuthButton = styled.a`
  all: unset;
  cursor: pointer;
  height: 100%;
  color: rgba(200, 200, 200, 0.8);
  border: 1px solid rgba(200, 200, 200, 0.8);
  border-radius: 16px;
  padding: 0.375rem 0.875rem;
  transition: .2s ease-in-out;
  &:hover {
    border: 1px solid #fff;
    color: #fff;
  }
`;

const Signup = styled(AuthButton)`
  @media screen and (max-width: 440px) {
    display: none;
  }
`;

const Login = styled(AuthButton)``;

const Navbar = styled.nav`
  
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 58px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px;
    height: 100%;
    box-sizing: border-box;
    > div {
      align-items: center;
      display: flex;
    }
  }
`;
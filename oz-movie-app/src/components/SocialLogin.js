import React from 'react'
import styled from 'styled-components'
import logo from '../assets/google-logo-w.png'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SocialLogin = () => {

  


  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     alert('로그아웃 되었습니다.')
  //   }).catch((error) => {
  //     alert('로그인 되어있지 않습니다.')
  //   });

  // }

  return (
    <>
      <div>
        <GoogleSignIn >
          <img src={logo} alt='google logo' />
          <p>Continue with Google</p>
        </GoogleSignIn>
        {/* <p onClick={handleLogout}> logout</p> */}
        <p> logout</p>
      </div>
    </>

  )
}

const GoogleSignIn = styled.button`
    color:#fff;
    font-size :1rem;
    cursor:pointer;
    display:flex;
    width : 320px;
    height: 52px;
    margin : 3rem auto;
    box-sizing : border-box;
    align-items:center;
    justify-content:center;
    background-color:#E74133;
    padding: .625rem;
    border-radius:12px;
    transition : .2 ease-in-out;

    img {
        height:24px;
        margin-right : .5rem;
    }

    &:hover {
        background-color: #FF4132;
    }
`
export default SocialLogin
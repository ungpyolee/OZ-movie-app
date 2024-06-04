import React from 'react'
import styled from 'styled-components'
import logo from '../assets/google-logo-w.png'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

  const navigate = useNavigate()
  const handleGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/main')

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const handleLogout = () => {
    signOut(auth).then(() => {
      alert('로그아웃 되었습니다.')
    }).catch((error) => {
      alert('로그인 되어있지 않습니다.')
    });

  }

  return (
    <>
      <div>
        <GoogleSignIn onClick={handleGoogle}>
          <img src={logo} alt='google logo' />
          <p>Continue with Google</p>
        </GoogleSignIn>
        <p onClick={handleLogout}> logout</p>
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
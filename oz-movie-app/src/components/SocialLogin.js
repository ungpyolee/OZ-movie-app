import React from 'react'
import styled from 'styled-components'
import logo from '../assets/google-logo-w.png'
import { AuthGoogle } from '../services/auth_google_popup';
import useUserStore from '../userStore';

const SocialLogin = () => {

  const { setUserData } = useUserStore();

  const AuthGoogleHandler = async () => {
    try {
      const result = await AuthGoogle();
      setUserData(result);
      // console.log(result);
    } catch (error) {
      console.error("Google sign-in failed", error);
    }
  };
  return (
    <>
      <div>
        <GoogleSignIn onClick={AuthGoogleHandler}>
          <img src={logo} alt='google logo' />
          <p>Continue with Google</p>
        </GoogleSignIn>
        <p>
        </p>
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
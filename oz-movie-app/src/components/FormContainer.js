import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo-b.png'
import SocialLogin from './SocialLogin'

const FormContainer = () => {

    const navigate = useNavigate()
  const {pathname} = useLocation()
  const handleSignup = () => {
    navigate('/signup');
  }
  
  switch (pathname) {
    case '/' :
        return (
            <>
                <Form>
                <img src={logo} alt='OZ로고' height={'32px'}/>
                <Title>Login</Title>
                <Input required type='text' placeholder='Email'/>
                <Input required type='password' placeholder='Password'/>
                <Button type='submit'>Login</Button>
                </Form>
                <p style={{textAlign:'center'}}>Don't have an account?</p>
                <LinkText onClick={handleSignup}>Sign Up with your E-mail</LinkText>
                <SocialLogin />
            </>
        )
        case '/signup' :
            return (
                <>
                <Form>
                <img src={logo} alt='OZ로고' height={'32px'}/>
                <Title>SignUp</Title>
                <Input required type='text' placeholder='Name'/>
                <Input required type='text' placeholder='Email'/>
                <Input required type='password' placeholder='Password'/>
                <Input required type='password' placeholder='Password confirm'/>
                <Button type='submit'>Sign up</Button>
                </Form>
                 </>
        )
  }
}
const LinkText = styled.p`
    text-align:center;
    cursor: pointer;
    color:#09DBBD;
    margin-top:4px;
    &:hover{
        text-decoration-line : underline;
    }
`

const Form = styled.form`
    width : 320px;
    margin : 3rem auto;
    text-align :center;
    box-sizing : border-box;
`

const Title = styled.p`
    font-size :1.5rem;
    margin : 3rem;

`

const Input = styled.input`
    width : 100%;
    height:56px;
    margin-top : 1rem;
    padding : 1rem;
    border : 1px solid rgba(249, 249, 249, 0.2);
    border-radius : 12px;
    background-color : rgba(249, 249, 249, 0.1);
    box-sizing : border-box;
`

const Button = styled.button`
    all:unset;
    cursor:pointer;
    height:56px;
    width : 100%;
    font-size : 1rem;
    margin-top : 1rem;
    border : 1px solid #09DBBD;
    border-radius : 12px;
    box-sizing : border-box;
    transition : .2s ease-in-out;
    color:#09DBBD;
    &:hover{
        color:#000012;
        background-color : #09DBBD;
        
    }
`

export default FormContainer
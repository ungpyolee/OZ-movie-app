import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo-b.png'

const FormContainer = () => {

    const [isSignUp, setIsSignUp] = useState(true)
  const {pathname} = useLocation()
  
  
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
const LinkText = styled.button`
  all : unset;
  font-size: 1.2rem;
  color: #2997ff;
  margin: .25rem 0;
  cursor : pointer;
`;

const Form = styled.form`
    width : 320px;
    margin : 3rem auto;
    height : 600px;
    text-align :center;
    box-sizing : border-box;
`

const Title = styled.p`
    font-size :1.5rem;
    margin : 3rem;

`

const Input = styled.input`
    width : 100%;
    height : 48px;
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
    width : 100%;
    font-size : 1.25rem;
    margin-top : 2rem;
    padding : .825rem;
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
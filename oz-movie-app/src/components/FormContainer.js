import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo-b.png';
import SocialLogin from './SocialLogin';
import { signUpUser } from '../services/auth_signup_password';
import { signInUser } from '../services/auth_signin_password';

const FormContainer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleSignUp = async () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return alert('유효한 이메일 주소를 입력하세요.');
        }
        if (password.trim().length < 6) {
            return alert('비밀번호는 최소 6자 이상이어야 합니다.');
        }
        if (password.trim() !== confirmPassword.trim()) {
            return alert('비밀번호가 일치하지 않습니다.');
        }
        try {
            await signUpUser(email, password);
            alert(`${name}님 가입이 완료되었습니다.`);
            navigate('/');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            alert(`가입 실패: ${error.message}`);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInUser(email, password);
            navigate('/main');
        } catch (error) {
            alert(`로그인 실패: ${error.message}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Form>
                <img src={logo} alt='OZ로고' height='32px' />
                <Title>{pathname === '/' ? 'Login' : 'SignUp'}</Title>
                {pathname === '/signup' && (
                    <Input required type='text' name='name' onChange={handleChange} value={name} placeholder='Name' />
                )}
                <Input required type='email' name='email' onChange={handleChange} value={email} placeholder='Email' />
                <Input required type='password' name='password' onChange={handleChange} value={password} placeholder='Password' />
                {pathname === '/signup' && (
                    <Input required type='password' name='confirmPassword' onChange={handleChange} value={confirmPassword} placeholder='Password confirm' />
                )}
                <Button type='button' onClick={pathname === '/' ? handleSignIn : handleSignUp}>
                    {pathname === '/' ? 'Login' : 'Sign up'}
                </Button>
            </Form>
            {pathname === '/' && (
                <>
                    <p style={{ textAlign: 'center' }}>Don't have an account?</p>
                    <LinkText onClick={() => navigate('/signup')}>Sign Up with your E-mail</LinkText>
                </>
            )}
            <SocialLogin />
        </>
    );
};

const LinkText = styled.p`
    text-align: center;
    cursor: pointer;
    color: #09DBBD;
    margin-top: 4px;
    &:hover {
        text-decoration: underline;
    }
`;

const Form = styled.form`
    width: 320px;
    margin: 3rem auto;
    text-align: center;
    box-sizing: border-box;
`;

const Title = styled.p`
    font-size: 1.5rem;
    margin: 3rem;
`;

const Input = styled.input`
    width: 100%;
    height: 56px;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 12px;
    background-color: rgba(249, 249, 249, 0.1);
    box-sizing: border-box;
    color: #fff;
`;

const Button = styled.button`
    all: unset;
    cursor: pointer;
    height: 56px;
    width: 100%;
    font-size: 1rem;
    margin-top: 1rem;
    border: 1px solid #09DBBD;
    border-radius: 12px;
    box-sizing: border-box;
    transition: 0.2s ease-in-out;
    color: #09DBBD;
    &:hover {
        color: #000012;
        background-color: #09DBBD;
    }
    &:focus {
        outline: 1px solid #fff;
    }
`;

export default FormContainer;

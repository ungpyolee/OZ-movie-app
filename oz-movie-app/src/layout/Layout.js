import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            
            <Nav />
            <Container>
                <Outlet />
            </Container>
            
        </>
      )
}


const Container = styled.div`
    padding : 74px 0 0 0;
    min-height:100vh;
    background-color : #000012;
    color:#fff;
    box-sizing:border-box;
`
export default Layout
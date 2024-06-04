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
    height:2000px;
    background-color : #000012;
    color:#fff;
`
export default Layout
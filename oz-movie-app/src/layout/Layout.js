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
    min-width:1320px;
    background-color : #20262C;
`
export default Layout
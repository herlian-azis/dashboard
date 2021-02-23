import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
    background: white;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
`

const SidebarNav = styled.nav`
    background: #0070FB;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0vh;
    transition: 350ms;
    z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%;
`
function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    console.log(sidebar)
    return (
        <>
            <Nav>
               
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
               <h1>  main menu</h1>
                    {SidebarData.map((item,index) =>{
                        return <SubMenu item={item} key={index}/>
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar

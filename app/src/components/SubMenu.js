import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 10px;
    text-decoration: none;
    font-size: 15px;

    &:active{
        background: #FFCB2B;
        cursor: pointer;
    color: #0070FB;

    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
    
    `

    const Arrow = styled.div`
    margin-right: 16px;
    opacity: 0;
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
    `

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
                <div>
                    <Arrow>

                    {item.icon2}
                    </Arrow>
                    {item.subNav && subnav
                        ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
        </>
    )
}

export default SubMenu
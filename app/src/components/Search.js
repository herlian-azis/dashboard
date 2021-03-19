import React from 'react'
import styled from 'styled-components'
import {AiOutlineDown } from 'react-icons/ai'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from '../image/ChatatLogo.svg'
import { Menu, Dropdown } from 'antd';


const Box = styled.div`
width: auto;

height: 65px;
box-shadow: 1px 1px 10px grey;
margin-bottom: 1vh;
margin-left: 257px;
`
const FlexContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 65px;
padding: 20px
`
const Input = styled.input`
width: 200px;
margin: 0 2rem;
border-radius: 10px;
list-style: none;
outline: none;
border: 1px solid grey;
`

const AppLogo = styled.img`
width: 9rem;
`
const P = styled.p`
margin: 2px 4px;
`


const search=()=> {
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">profile</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">logout</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    return (
     <Box>
         <FlexContainer>

             <P>Powered By</P>
             <AppLogo src={Logo} alt="Logo" />
            <Input placeholder="Cari Data UMKM" />
         <Avatar  icon={<UserOutlined />} />
         <div>
         <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
             <AiOutlineDown/>
    </a>
  </Dropdown>,
         </div>
         </FlexContainer>
         
         </Box>
    )
}

export default search

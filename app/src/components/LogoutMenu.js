import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const backgroundColor2 = "#FFCB05"
const LogoutMenu = () => {
  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    history.push(`/`)

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="https://www.antgroup.com">Profile</a>
        </Menu.Item>
        <Menu.Item key="3"onClick={logout} >
            Logout
        </Menu.Item>
      </Menu>
    )
    return (
      <>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar style={{ backgroundColor: backgroundColor2, zIndex: 100 }}>
              G P
              </Avatar>
            <DownOutlined />
          </a>
        </Dropdown>
      </>
    )
  }
}
  export default LogoutMenu

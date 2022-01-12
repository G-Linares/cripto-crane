import React from 'react'
import { Button, Meny, Typography, Avatar, Menu } from 'antd';
import { Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import icon from '../images/logo.png';


const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to ="/">Crypto Crane</Link>
                </Typography.Title>
                <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                        <Link to = "/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to = "/cryptocurrencies">Cripto Monedas</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to = "/exchanges">Cambios</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to = "/news">Noticias</Link>
                    </Menu.Item>
                </Menu>
            </div>
            
        </div>
    )
}

export default Navbar

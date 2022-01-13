import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    
    if(isFetching) return <Loader/>;
    
    return (
        <>
           <Title level={2} className="heading">Estadísticas Globales de Cripto</Title>
           <Row>
               <Col span={12}><Statistic title="Criptomonedas Totales" value ={globalStats.total}/></Col>
               <Col span={12}><Statistic title="Cambios Totales" value ={millify(globalStats.totalExchanges)}/></Col>
               <Col span={12}><Statistic title="Capitalización Total del Mercado" value ={millify(globalStats.totalMarketCap)}/></Col>
               <Col span={12}><Statistic title="Volumen 24h Total" value ={millify(globalStats.total24hVolume)}/></Col>
               <Col span={12}><Statistic title="Mercados Totales" value ={millify(globalStats.totalMarkets)}/></Col>
           </Row>
           <div className = "home-heading-container">
               <Title level={2} className="home-title"> Top 10 Criptomonedas en el Mundo</Title>
               <Title level={3} className="show-more"><Link to="/cryptocurrencies">Ver Más</Link></Title>
           </div>
           <Cryptocurrencies simplified />
           <div className = "home-heading-container">
               <Title level={2} className="home-title">Últimas Noticias Sobre Cripto</Title>
               <Title level={3} className="show-more"><Link to="/news">Ver Más</Link></Title>
           </div>
           <News simplified />

        </>
    )
}

export default Homepage

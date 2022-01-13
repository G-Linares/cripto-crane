import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    console.log(data);
    return (
        <>
           <Title level={2} className="heading">Estadísticas Globales de Cripto</Title>
           <Row>
               <Col span={12}><Statistic title="Criptomonedas Totales" value ="5"/></Col>
               <Col span={12}><Statistic title="Cambios Totales" value ="5"/></Col>
               <Col span={12}><Statistic title="Capitalización Total del Mercado" value ="5"/></Col>
               <Col span={12}><Statistic title="Volumen 24h Total" value ="5"/></Col>
               <Col span={12}><Statistic title="Mercados Totales" value ="5"/></Col>

           </Row>
        </>
    )
}

export default Homepage

import React, {useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    if(isFetching) return 'Cargando...';

    console.log(cryptos);

    return (
        <>
            <Row gutter ={[ 32, 32 ]} className="crypto-car-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                hoverable
                            >
                                <p>Precio: {millify(currency.price)}</p>
                                <p>Cap. del Mercado: {millify(currency.marketCap)}</p>
                                <p>Cambios Diarios: {millify(currency.change)}%</p>
                            </Card>
                        </Link>

                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Cryptocurrencies;
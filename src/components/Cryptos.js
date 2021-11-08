import React, {useEffect, useState} from 'react';
import axios from "axios";
import CryptoItem from "./CryptoItem";

const Cryptos = () => {

    const [data, setData] = useState([]);
    const [idCoin, setIdCoin] = useState('');

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + idCoin + '&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then((result) => {
                console.log(result.data)
                setData(result.data);
        });
    }, []);



    return (
        <table className="w-full">
            <thead>
                <tr className='border-b border-gray-300 text-left'>
                    <th className='p-5'>Name</th>
                    <th className='p-5'>Price</th>
                </tr>
            </thead>
            <tbody className="cryptos-list">
                {data
                    //.filter((crypto, index) => index < 50)
                    .map((crypto) => (
                        <CryptoItem crypto={crypto} key={crypto.id} />
                    ))
                }
            </tbody>
        </table>
    );
};

export default Cryptos;
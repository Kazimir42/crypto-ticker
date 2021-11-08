import React, {useEffect, useState} from 'react';
import axios from "axios";
import CryptoItem from "./CryptoItem";

const Cryptos = () => {

    const [data, setData] = useState([]);
    const [idCoin, setIdCoin] = useState('');

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=market_cap_desc&per_page=250&page=1&sparkline=false')
            .then((result) => {
                setData(result.data);
        });
    }, []);



    return (
        <div className="cryptos">
            <div className="cryptos-filter p-5 flex h-20 gap-2 bg-gray-100 rounded-md shadow mb-10">
                <input type="text" placeholder="Bitcoin" onChange={(e) => setIdCoin(e.target.value)} className="border border-gray-500 w-4/5 rounded-md p-2"/>
                <button className='w-1/5 bg-primary text-white rounded-md hover:bg-dark-primary'>Search</button>
            </div>
            <table className="cryptos-list w-full bg-gray-100 rounded-md shadow">
                <thead>
                    <tr className='border-b border-gray-300 text-left'>
                        <th className='p-5'>Name</th>
                        <th className='p-5'>Price</th>
                    </tr>
                </thead>
                <tbody className="">
                    {data
                        .filter((crypto) => crypto.name.includes(idCoin))
                        .filter((crypto, index) => index < 50)
                        .map((crypto) => (
                            <CryptoItem crypto={crypto} key={crypto.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cryptos;
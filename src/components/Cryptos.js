import React, {useEffect, useState} from 'react';
import axios from "axios";
import CryptoItem from "./CryptoItem";

const Cryptos = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/list')
            .then((result) => {
                console.log(result.data)
                setData(result.data);
        });
    }, []);



    return (
        <div className="border border-black">
            <ul className="cryptos-list">
                {data
                    .filter((crypto, index) => index < 50)
                    .map((crypto) => (
                        <CryptoItem crypto={crypto} key={crypto.id} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Cryptos;
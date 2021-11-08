import React from 'react';
import {Link} from 'react-router-dom';

const CryptoItem = (props) => {


    const numberFormater = (value) => {
        return (value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }


    return (
        <tr className="h-16 border-b border-gray-300">
            <td className="flex items-center h-inherit p-5 gap-2 font-bold">
                <img src={props.crypto.image} className="w-10" alt={props.crypto.name}/>
                <p>{props.crypto.name}</p>
            </td>
            <td className="p-5">
                <p className="font-bold">{numberFormater(props.crypto.current_price)}</p>
            </td>
            <td className={props.crypto.price_change_percentage_24h>0? 'text-green-500 p-5 font-bold' : 'text-red-500 p-5 font-bold'}>
                <p>{props.crypto.price_change_percentage_24h.toFixed(2)}%</p>
            </td>
            <td className="p-5">
                <p className="">{numberFormater(props.crypto.market_cap)}</p>
            </td>
            <td className="p-5 text-right">

                <Link
                    to={`/cryptos/${props.crypto.id}`}
                    className="bg-primary text-white rounded-md p-2 hover:bg-dark-primary">
                    where buy ?
                </Link>

            </td>
        </tr>

    );
};

export default CryptoItem;
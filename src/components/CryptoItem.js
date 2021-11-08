import React from 'react';
import { Link } from 'react-router-dom';

const CryptoItem = (props) => {
    return (
        <tr className="h-16 border-b border-gray-300">
            <td className="flex items-center h-inherit p-5 gap-2 font-bold">
                <img src={props.crypto.image} className="w-10" />
                <p>{props.crypto.name}</p>
            </td>
            <td className="p-5">
                <p>${props.crypto.current_price}</p>
            </td>
            <td className="p-5 text-right">
                <Link
                    to={{
                        pathname: `/${props.crypto.id}`,
                        state: props.crypto
                    }}
                    className="bg-primary text-white rounded-md p-2 hover:bg-dark-primary">
                    <button>where buy ?</button>
                </Link>

            </td>
        </tr>

    );
};

export default CryptoItem;
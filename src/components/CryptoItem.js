import React from 'react';

const CryptoItem = (props) => {
    return (
        <li>
            <h2>{props.crypto.name}</h2>
        </li>
    );
};

export default CryptoItem;
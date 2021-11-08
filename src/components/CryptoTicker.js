import React from 'react';

const CryptoTicker = (props) => {
    return (
        <div>
            {props.market.exchangeId}
        </div>
    );
};

export default CryptoTicker;
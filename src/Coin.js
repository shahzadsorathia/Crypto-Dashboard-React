import React from 'react'

function Coin({ name, image, Symbol, price, volume, priceChange, marketcap }) {
    return (
        <div className="coin-1">
            <div className="coin-2">
                <div className="class-3">
                    <img src={image} />
                    <h1> {name}</h1>
                    <p > {Symbol}</p>
                </div>

                <div className="coin-4">
                    <p className="coin-5"> ${price}</p>
                    <p className="coin-6"> ${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-7 "> {priceChange.toFixed(2)}% </p>
                    ) : (
                        <p className="coin-7 "> {priceChange.toFixed(2)}% </p>
                    )}

                    <p className="coin-8" > Mkt Cap: ${marketcap.toLocaleString()}</p>

                </div>
            </div>
        </div>
    )
}

export default Coin

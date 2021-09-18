

import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';


function Coinapi() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
  
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false ')
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value)
    }
  
    const filtercoins =
      coins.filter(
        coin => coin.name.toLowerCase().includes(search.toLowerCase())
      )
  
  
    return (
      <div className="App">
        <div className="search">
          <h1 className="text"> Search </h1>
          <form>
            <input
              type="text"
              placeholder="Seach"
              className="input"
              onChange={handleChange}
            />
          </form>
        </div>
  
        {filtercoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              Symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    );
  }
  
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

export default Coinapi

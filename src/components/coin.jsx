import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Coinapi() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false ')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filtercoins =
    coins.filter(
      coin => coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div className="coin-searchbar">
      <div className="coin-input">
        <input
          type="text"
          placeholder="Search....."
          className="search"
          onChange={handleChange}
        />
      </div>

      {filtercoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
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

function Coin(
  { name, image, symbol, price, volume, priceChange, marketcap }) {

  return (

    <div className='coin-container'>
      <img className="coin-img" src={image} alt='crypto' />
      <h1>{name}</h1>
      <h2>{symbol}</h2>
      <h2>${price.toLocaleString()}</h2>
      <h2 >${volume.toLocaleString()}</h2>
      {priceChange < 0 ? (
        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
      ) : (
        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
      )}
      <h2 className='coin-marketcap'>
        Mkt Cap: ${marketcap.toLocaleString()}
      </h2>
    </div>


  );
};

export default Coinapi;
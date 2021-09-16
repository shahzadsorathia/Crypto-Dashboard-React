import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false ')
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

export default App;

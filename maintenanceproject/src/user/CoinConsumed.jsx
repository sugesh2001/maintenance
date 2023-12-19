// App.jsx

import React from 'react';
import './CoinConsumed.css';



const CoinsComponent = ({ coin }) => {    
  return (
    <div className="coins-container">
      <h3 className="coins-header">Coins</h3>
      <div className="form-group row">
        <div className="btn-container"> 
          <a href="/fleet/Credit_Coins/Coin_Request" className="btn btn-primary col-form-label">
            + Request Coins
          </a>
        </div>
      </div>

      <div className="hero">
        <div className="coin-remain">
          <img className="coin-img" src="/crcoin1.png" alt="Coins Remaining" />
          <h5 className="coin-text">Coins Remaining</h5>
          <h4 className="coin-value"></h4>
        </div>

        <div className="coin-consumed">
          <img className="coin-img" src="/crcoin2.png" alt="Coins Consumed" />
          <h5 className="coin-text">Coins Consumed</h5>
          <h4 className="coin-value"></h4>
        </div>
      </div>
    </div>
  );
};

export default CoinsComponent;
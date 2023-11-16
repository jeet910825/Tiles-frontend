import React from "react";
import "./Home.css";
import tile1 from "../../img/tile1.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()
  return (
    <div className="home-container">
      <div className="home-top">
        <div className="home-banner-text">
          <p>We</p>
          <p>Sell Premimum</p>
          <p>Tiles</p>
        </div>
        <img src={tile1} alt="tile image" />
      </div>
      <div className="home-bottom">
        <h2 className="home-bottom-text">The Art Of Design</h2>
        <div className="tiles-type">
          <div className="empty" />
          <div className="img background1">
            <p>Wall</p>
          </div>
          <div className="img background2">
            <p>Floor</p>
          </div>
          <div className="img background3">
            <p>Kitchen</p>
          </div>
          <div className="img background4">
            <p>Bathroom</p>
          </div>
        </div>
        <div className="viewProductBtn">
          <button onClick={()=>{navigate('/product')}}>View Product </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

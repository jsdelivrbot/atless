import React from 'react';
import VCard from '../cards/Vertical';
import HCard from '../cards/Horizontal';
import './Home.css';


const Home = () => {
  var myCards = [];
  for(var i = 0; i < 5; i++) {
    myCards.push(<VCard key={i}/>);
  }
  return (
    <div className="home">
      <div className="home-feed">
        {myCards}
      </div>
    </div>
  )
}

export default Home

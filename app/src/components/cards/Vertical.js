import React from 'react';
import './Card.css';
import './Vertical.css';

const Vertical = () => {
  return (
    <div className="v-card card">
      <div className="v-describe card-describe">
        <h1 className="v-title card-title">Google Steps Into Home Automation</h1>
      </div>
      <div className="v-cover card-cover"
        style={{backgroundImage: "url('https://media.wired.com/photos/59d50d86238ef462c78efa50/master/w_1290,c_limit/Mini-TA.jpg')"}}>

      </div>
    </div>
  )
}

export default Vertical

import React from 'react';
import './Card.css';
import './Horizontal.css'

const Horizontal = () => {
  return (
    <div className="h-card card">
      <div className="h-cover card-cover"
        style={{backgroundImage: "url('https://media.wired.com/photos/59d50d86238ef462c78efa50/master/w_1290,c_limit/Mini-TA.jpg')"}}>

      </div>
      <div className="h-describe">
        <h1 className="h-title card-title">Google Steps Into Home Automation</h1>
      </div>
    </div>
  )
}

export default Horizontal;

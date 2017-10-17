import React from 'react';
// import './SmallPost.css';

function SmallPost(props) {
  return (
    <div className="smPost">
      <div className="smCover bkg"
        style={{backgroundImage: "url("+props.img+")"}}></div>
      <div className="smContent">
        <h2>{props.title.substring(0, 70)}</h2>
        <h4>{props.body.substring(0, 120)}</h4>
      </div>
      <style>{`
        .smPost {
          border: 1px solid #F5F5F5;
          border-radius: 5px;
          margin-bottom: 2rem;
          -webkit-box-shadow: 0px 7px 21px 1px rgba(224,221,224,0.21);
          -moz-box-shadow: 0px 7px 21px 1px rgba(224,221,224,0.21);
          box-shadow: 0px 7px 21px 1px rgba(224,221,224,0.21);
          display: flex;
          align-items: center;
        }
        .smCover {
          min-width: 100px;
          height: 100px;
          background-color: #F5F5F5;
          margin: 20px;
        }
        .smContent > h2 {
          color: #95989A;
          font-size: 20px;
        }
        .smContent > h4 {
          color: #BEBFBF;
          font-size: 15px;
        }

      `}</style>
    </div>
  )
}


export default SmallPost;

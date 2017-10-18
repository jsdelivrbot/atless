import React from 'react';

function Article(props) {
  const ARTICLE_ID = props.location.pathname.substring("/blog/".length);
  return (
    <div id="article">
      <div className="article-cover bkg"
        style={{backgroundImage: "url('http://img.fliptab.io/mountain/1920x1200/54043068.jpg')"}}></div>
      <div className="article-container">
        <h4>Article ID: {ARTICLE_ID}</h4>
        <h1 className="article-title">Soak Up the Marrow Out of Life</h1>
        <h3 className="article-body">Read something cool...</h3>
        <p>Tousled four loko food truck lumbersexual man bun. Intelligentsia echo park scenester 3 wolf moon, skateboard pop-up poke VHS williamsburg gentrify pug sartorial offal. Lo-fi chambray keytar meh lumbersexual VHS. Pour-over distillery live-edge, twee vexillologist green juice selvage gastropub irony VHS literally polaroid chillwave celiac. Occupy meh forage single-origin coffee bushwick tote bag marfa fingerstache. Taiyaki plaid scenester blog cardigan flannel salvia kickstarter twee woke. Asymmetrical taiyaki hammock man braid chambray sriracha. Blue bottle bicycle rights 3 wolf moon hella, seitan biodiesel coloring book pinterest fixie sriracha waistcoat migas. Vice pitchfork microdosing ugh yr aesthetic.</p>
      </div>
      <style>{`
        .article {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .article-cover {
          width: 100vw;
          height: 25rem;
          background-color: gray;
        }
        .article-container {
          max-width: 650px;
          margin: auto;

        }
        .article-title {
          font-size: 40px;
        }
        .article-body {
          font-size: 20px;
          color: #95989A;
        }
        p {
          font-size: 18px;
          line-height: 32px;
        }
      `}</style>
    </div>
  )
}

export default Article

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SmallPost from './components/SmallPost';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        data: data
      })
    })
    .catch(err => console.log(err))
  }

  getData() {
    if(this.state.data.length != 0) {
      let list = this.state.data.map(post => {
        return (
          <Link to={'/blog/' + post.id} key={post.id}>
            <SmallPost
              title={post.title}
              body={post.body}
              img={'https://www.bhphotovideo.com/images/images2500x2500/google_ga3a00417a14_home_1297281.jpg'}
            />
          </Link>
        )
      });
      return list;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="home">
        <h1 className="home-title">Burn a Little Brighter</h1>
        <hr/>
        <div className="post-container">
          {this.getData()}
        </div>
        <style>{`
          .home-title {
            text-align: center;
          }
          hr {
            width: 80%;
          }
          .post-container {
            margin: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default Home

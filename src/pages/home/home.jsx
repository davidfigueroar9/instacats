import React, { Component } from 'react';
import axios from 'axios';
import { Header, Post, PlaceHolder } from './components';
import './styles.css';


class Home extends Component {
  state = {
    posts: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://rest-user.herokuapp.com/posts').then((response) => {
      this.setState(
        {
          posts: response.data.posts.map(post => ({
            // eslint-disable-next-line no-underscore-dangle
            id: post._id,
            caption: post.caption,
            content: post.content.map(c => ({
              src: c.src,
              // eslint-disable-next-line no-underscore-dangle
              id: c._id,
            })),
            user: {
              // eslint-disable-next-line no-underscore-dangle
              id: post.user._id,
              username: post.user.username,
              name: post.user.name,
              image_url: post.user.image_url,
            },
            location: post.location,
            likes: post.likes,
            comments: post.comment,
          })),
          loading: false,
        },
      );
    });
  }

  render() {
    const { posts, loading } = this.state;

    // if (loading) return 'Loading...';
    return (
      <div className="Home">
        <Header />
        {
          loading && (
            <div>
              <PlaceHolder />
              <PlaceHolder />
              <PlaceHolder />
              <PlaceHolder />
            </div>
          )
        }
        {
          posts.map(post => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>
    );
  }
}

export default Home;

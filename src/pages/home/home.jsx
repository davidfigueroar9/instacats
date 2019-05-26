import React, { Component } from 'react';
import axios from 'axios';
import { Header, Post, PlaceHolder } from './components';
import './styles.css';

<<<<<<< Updated upstream
const posts = [
  {
    id: '1',
    content: [
      { src: 'https://picsum.photos/400/300?random=1' },
    ],
    user: {
      id: '1',
      username: 'gissellevdv',
      name: 'Gisselle Diaz',
      image_url: 'https://dummyimage.com/600x400/000/fff',
    },
    location: '',
    likes: 1233,
    comments: [
      {
        user: {
          id: '1',
          username: 'gissellevdv',
          name: 'Gisselle Diaz',
          image: 'https://dummyimage.com/600x400/000/fff',
        },
        comment: 'Soo nice!',
        likes: 10,
      },
    ],
  },
  {
    id: '2',
    content: [
      { src: 'https://picsum.photos/400/300?random=2' },
    ],
    user: {
      id: '2',
      username: 'davidfigueroar9',
      name: 'David Figueroa',
      image_url: 'https://loremflickr.com/640/360',
    },
    location: '',
    likes: 140,
    comments: [
      {
        user: {
          id: '2',
          username: 'davidfigueroar9',
          name: 'David Figueroa',
          image: 'https://loremflickr.com/640/360',
=======
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
>>>>>>> Stashed changes
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

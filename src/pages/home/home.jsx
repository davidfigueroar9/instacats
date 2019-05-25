import React from 'react';
import { Header, Post } from './components';
import './styles.css';

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
        },
        comment: 'Que buena foto!',
        likes: 5,
      },
    ],
  },
];

const Home = () => (
  <div className="Home">
    <Header />
    {
      posts.map(post => (
        <Post key={post.id} post={post} />
      ))
    }
  </div>
);

export default Home;

import React from 'react';
import { Header, Post } from './components';
import './styles.css';

const users = [
  {
    img: 'https://dummyimage.com/50x50/000/fff',
    name: 'Gisselle Diaz',
  },
  {
    img: 'https://dummyimage.com/50x50/000/fff',
    name: 'David Figueroa',
  },
];

const Home = () => (
  <div className="Home">
    <Header />
    {
      users.map((user, index) => (
        <Post key={index} user={user} />
      ))
    }
  </div>
);

export default Home;

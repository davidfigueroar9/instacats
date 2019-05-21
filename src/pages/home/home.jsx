import React from 'react';
import { Header, Post } from './components';
import './styles.css';

const users = [
  {
    id: '1',
    img: 'https://dummyimage.com/50x50/000/fff',
    name: 'Gisselle Diaz',
  },
  {
    id: '2',
    img: 'https://dummyimage.com/50x50/000/fff',
    name: 'David Figueroa',
  },
];

const Home = () => (
  <div className="Home">
    <Header />
    {
      users.map(user => (
        <Post key={user.id} user={user} />
      ))
    }
  </div>
);

export default Home;

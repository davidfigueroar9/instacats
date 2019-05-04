import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import {
  Home, Likes, Profile, Explore,
} from './pages';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/likes" component={Likes} />
        <Route path="/profile" component={Profile} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

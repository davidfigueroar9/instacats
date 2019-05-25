import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../../PostHeader';
import PostFooter from '../PostFooter/PostFooter';
import './styles.css';


const Post = ({ user }) => (
  <div className="Post">
    <PostHeader
      img={user.img}
      name={user.name}
    />
    <PostFooter />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

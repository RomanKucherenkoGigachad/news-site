/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { PropTypes } from "prop-types";

import "../../../styles/post.css";

export const Post = ({ post }) => (
  <div className="post" data-testid="post-container-element">
    <div className="post__title" data-testid="title-container-element">
      {post.title}
    </div>
    <div className="post__text" data-testid="text-container-element">
      {post.text}
    </div>
    <div className="post__authors" data-testid="authors-container-element">
      {post.User.login}
    </div>
    <div className="post__tags" data-testid="tags-container-element">
      {post.tags}
    </div>
  </div>
);
Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

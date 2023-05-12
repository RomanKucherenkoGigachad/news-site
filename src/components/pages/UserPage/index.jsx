/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from "prop-types";

import { getUserPageRequested } from "../../../store/actions/user";
import { postsRequested } from "../../../store/actions/news";
import { Header } from "../../Header";
import { Post } from "../../News/Post";

import "../../../styles/user-page.css";

export const UserPage = (props) => {
  const { match } = props;
  const userId = match.params?.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPageRequested(userId));
    dispatch(postsRequested(userId));
  }, [dispatch, userId]);

  const { isFetching, news, error } = useSelector((state) => state.newsReducer);
  const { user } = useSelector((store) => store.userReducer);
  const userPosts = news.filter((post) => post.user_id === user.id);

  if (isFetching) {
    return "Loading...";
  }

  if (error) {
    return "Error...";
  }

  return (
    <>
      <Header />
      <div className="user-page">
        <div className="user-page__avatar">Avatar will be here</div>
        <div className="user-page__contact-info contact-info">
          <div className="contact-info__info-field">Name</div>
          <div className="contact-info__user-value">{user?.name}</div>
          <div className="contact-info__info-field">Surname</div>
          <div className="contact-info__user-value">{user?.surname}</div>
          <div className="contact-info__info-field">Login</div>
          <div className="contact-info__user-value">{user?.login}</div>
        </div>
        <div className="user-page__news news">
          <div className="news__title"> Your posts </div>
          <div className="news__news-place">
            {userPosts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

UserPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

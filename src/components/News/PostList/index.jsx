/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pagination } from "@mui/material";

import { Filter } from "../../Filter";
import { Post } from "../Post";
import usePagination from "../../../helpers/hooks";
import { newsRequested } from "../../../store/actions/news";

import "../../../styles/main-page.css";

const POSTS_PER_PAGE = 3;

export const PostList = () => {
  const { isFetching, news, error } = useSelector((state) => state.newsReducer);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsRequested());
  }, [dispatch]);

  const handleInputChange = function handleInputChange(event) {
    setInputValue(event.target.value);
  };

  const filteredNews = () => {
    const filterMap = {
      all: (item) => [item.text, item.title, item.tags, item.User.login],
      authors: (item) => [item.User.login],
      tags: (item) => [item.tags],
      title: (item) => [item.title],
    };

    const filterFields = filterMap[filter];
    const inputLC = inputValue.toLowerCase();
    const result = news.filter((newsItem) =>
      filterFields(newsItem)
        .map((item) => item.toLowerCase())
        .some((filterMapValueLC) => filterMapValueLC.includes(inputLC))
    );
    return result;
  };

  const { totalPages, currentPage, setCurrentPage, pageItems } = usePagination(
    filteredNews(),
    POSTS_PER_PAGE
  );

  const onChangePage = (e, newPage) => {
    setCurrentPage(newPage - 1);
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder=" search news here"
        value={inputValue}
        onChange={handleInputChange}
        data-testid="main-input-element"
      />
      <Filter filter={filter} setFilter={setFilter} className="filter" />
      {pageItems.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <Pagination
        count={totalPages}
        currentpage={currentPage}
        pageitems={pageItems}
        onChange={onChangePage}
        color="primary"
      />
    </div>
  );
};

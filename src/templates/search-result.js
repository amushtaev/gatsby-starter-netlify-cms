import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import NavRoll from "../components/NavRoll";
import BlogRollPosts from "../components/BlogRollPosts";
import LayoutBlog from "../components/LayoutBlog";
import PropTypes from "prop-types";

const SearchPage = ({pageContext }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];

  const {
    slug,
  } = pageContext;

    return (
      <LayoutBlog>
        <div
          className="index Search"
        >
          <h1 className="h1-title" >
            SEARCH RESULTS
          </h1>
          <h2 className="h2-subtitle">Showing {'result'} articles</h2>
        </div>
        <section>
          <NavRoll active={slug} />
        </section>
        <section className="section index Posts">
          <div className="container">
            <div className="content">
              <BlogRollPosts pageContext={ pageContext } />
            </div>
          </div>
        </section>
      </LayoutBlog>
    )
};
export default SearchPage

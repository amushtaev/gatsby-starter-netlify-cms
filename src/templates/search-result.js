import React from 'react'
import NavRoll from "../components/NavRoll";
import BlogRollPosts from "../components/blog/BlogRollPosts";
import LayoutBlog from "../components/blog/LayoutBlog";

const SearchPage = ({pageContext, search }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];

  const {
    slug,
    title,
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
              <BlogRollPosts pageContext={ pageContext } search={search} />
            </div>
          </div>
        </section>
      </LayoutBlog>
    )
};
export default SearchPage

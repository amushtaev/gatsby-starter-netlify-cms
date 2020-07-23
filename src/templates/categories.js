import React from 'react'
import NavRoll from "../components/NavRoll";
import BlogPaginationPosts from "../components/BlogPaginationPosts";
import LayoutBlog from "../components/LayoutBlog";
import Pagination from "../components/Pagination";

const CatPage = ({data, pageContext }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
  const {
    slug,
  } = pageContext;

  return (
    <LayoutBlog>
      <div
        className="index Blog"
      >
        <h1 className="h1-title" >
          SOFTCUBE BLOG
        </h1>
        <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
      </div>
      <section>
        <NavRoll active={slug[0]} />
      </section>
      <section className="section index Posts">
        <div className="container">
          <div className="content">
            <BlogPaginationPosts pageContext={ pageContext } />
          </div>
          <Pagination pageContext={pageContext} category={`/category/${slug}`} link={`/category/${slug}/page/`} />
        </div>
      </section>
    </LayoutBlog>
  )
};
export default CatPage

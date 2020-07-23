import React, { useEffect, useState } from 'react';
import NavRoll from '../components/NavRoll';
import BlogPaginationPosts from '../components/BlogPaginationPosts';
import LayoutBlog from '../components/LayoutBlog';
import Pagination from '../components/Pagination';

const BlogPage = ({data, pageContext }) => {
  console.log(pageContext)
  useEffect(() => {
    console.log("useEffect")
  });

  return (
    <LayoutBlog>
      <div
        className='index Blog'
      >
        <h1 className='h1-title' >
          SOFTCUBE BLOG
        </h1>
        <h2 className='h2-subtitle'>News, guides, and updates on Google and Facebook marketing</h2>
      </div>
      <section>
        <NavRoll data={data} />
      </section>
      <section className='section index Posts'>
        <div className='container'>
          <div className='content'>
            <BlogPaginationPosts pageContext={ pageContext } />
          </div>
          <Pagination pageContext={pageContext} category={`/blog/`} link={`/blog/page/`} />
        </div>
      </section>
    </LayoutBlog>
  )
};
export default BlogPage

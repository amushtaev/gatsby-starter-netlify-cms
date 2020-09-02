import React, {useEffect, useState} from 'react'
import NavRoll from "../components/NavRoll";
import BlogRollPosts from "../components/blog/BlogRollPosts";
import LayoutBlog from "../components/blog/LayoutBlog";
import {Link} from "gatsby";
import {isMobile} from "react-device-detect";

const SearchPage = ({pageContext, search }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
  const [newSearch, setSearch] = useState(search);
  const {
    slug,
  } = pageContext;
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(typeof document !== 'undefined' && document.querySelectorAll(".is-parent.column.is-4").length)
  }, [typeof document !== 'undefined' && document.querySelectorAll(".is-parent.column.is-4").length]);

  return (
    <LayoutBlog>
      <div
        className="index Search"
      >
        <h1 className="h1-title" >
          SEARCH RESULTS
        </h1>
        <h2 className="h2-subtitle">Showing {result} articles</h2>
      </div>
      <section style={{position: 'relative'}}>
        <NavRoll active={'slug'} defaultSearch={search} onSearch={(value) => setSearch(value)} />
        {isMobile ?
          <Link
            className="read-more mobile-all-posts" to={'/blog/'}
          >
            View all blog post  <span style={{fontSize: '24px', paddingLeft: '15px', lineHeight: '2.7rem'}}>→</span>
          </Link>
          : ''
        }
      </section>
      <section className="section index Posts Search" style={{marginBottom: '143px'}}>
        <div className="container">
          <div className="content">
            <BlogRollPosts pageContext={ pageContext } search={newSearch} />
          </div>
        </div>
      </section>
    </LayoutBlog>
  )
};
export default SearchPage

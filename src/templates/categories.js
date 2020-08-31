import React, {useEffect, useState} from 'react'
import NavRoll from "../components/NavRoll";
import BlogPaginationPosts from "../components/blog/BlogPaginationPosts";
import LayoutBlog from "../components/blog/LayoutBlog";
import Pagination from "../components/Pagination";
import useDebounce from "../components/DebouncedHook";
import { Router } from "@reach/router";
import SearchPage from "./search-result";

const CatPage = ({pageContext, stringSearch }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
  const {
    slug,
  } = pageContext;
  const [search, setSearch] = useState(stringSearch);
  const [redirectTo, setRedirectTo] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 1500);
  /*const history = window.browserHistory || createBrowserHistory();*/

  useEffect(() => {
    setRedirectTo(true);
  }, [debouncedSearchTerm]);

  if(debouncedSearchTerm && redirectTo){
    return (
      <Router>
        <SearchPage pageContext={pageContext} search={debouncedSearchTerm} path={`/category/${slug}`} to='/search' />
      </Router>)
  }

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
        <NavRoll active={slug[0]} defaultSearch={stringSearch} onSearch={(value) => setSearch(value)} isShowSearch={true} />
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

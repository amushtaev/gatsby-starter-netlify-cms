import React, { useEffect, useState } from 'react';
import NavRoll from '../components/NavRoll';
import BlogPaginationPosts from '../components/blog/BlogPaginationPosts';
import LayoutBlog from '../components/blog/LayoutBlog';
import Pagination from '../components/Pagination';
import PropTypes from 'prop-types';
import SearchPage from './search-result'
import { Redirect, Route, Router, Switch } from "react-router";
import useDebounce from '../components/DebouncedHook'
import { createBrowserHistory } from 'history'

const BlogPage = ({pageContext, stringSearch}) => {
  const [search, setSearch] = useState(stringSearch);
  const [redirctTo, setRedirctTo] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 1000);
  /*const history = createBrowserHistory();*/

  useEffect(() => {
    setRedirctTo(true);
  }, [debouncedSearchTerm]);
  //TODO
  if(debouncedSearchTerm && redirctTo){

    return (
      <Router  /*history={history}*/>
        <Switch>
          <Route path='/search'>
            <SearchPage pageContext={pageContext} search={debouncedSearchTerm} />
          </Route>
          <Redirect path='/blog' to='/search' />
        </Switch>
      </Router>)
  }

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
        <NavRoll defaultSearch={stringSearch} onSearch={(value) => setSearch(value)} />
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

BlogPage.propType = {
  stringSearch: PropTypes.string,
};


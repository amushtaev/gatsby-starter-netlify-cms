import React, { useEffect, useState } from 'react';
import NavRoll from '../components/NavRoll';
import BlogPaginationPosts from '../components/blog/BlogPaginationPosts';
import LayoutBlog from '../components/blog/LayoutBlog';
import Pagination from '../components/Pagination';
import PropTypes from 'prop-types';
import SearchPage from './search-result';
import { Router } from "@reach/router";
import Helmet from "react-helmet";
import useDebounce from '../components/DebouncedHook';
import loadable from "@loadable/component";
const ScCookie = loadable(() => import('../components/Cookies'));

const BlogPage = ({pageContext, stringSearch}) => {
  const [search, setSearch] = useState(stringSearch);
  const [redirectTo, setRedirectTo] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 1500);
  useEffect(() => {
    setRedirectTo(true);
  }, [debouncedSearchTerm]);
  //TODO
  if(debouncedSearchTerm && redirectTo){

    return (
      <Router>
        <SearchPage pageContext={pageContext} search={debouncedSearchTerm} path='/blog' to='/search' />
      </Router>)
  }

    return (
        <LayoutBlog>
            <Helmet>
                <meta name="description" content="News, guides, and updates on Google and Facebook marketing"/>
                <title>Blog | Softcube</title>
            </Helmet>
            <div
                className='index Blog'
            >
                <h1 className='h1-title'>
                    SOFTCUBE BLOG
                </h1>
                <h2 className='h2-subtitle'>News, guides, and updates on Google and Facebook marketing</h2>
            </div>
            <section>
                <NavRoll defaultSearch={stringSearch} onSearch={(value) => setSearch(value)} isShowSearch={true}/>
            </section>
            <section className='section index Posts'>
                <div className='container'>
                    <div className='content'>
                        <BlogPaginationPosts pageContext={pageContext}/>
                    </div>
                    <Pagination pageContext={pageContext} link={`/blog/page/`}/>
                </div>
            </section>
            <ScCookie/>
        </LayoutBlog>
    );

};
export default BlogPage

BlogPage.propType = {
  stringSearch: PropTypes.string,
};


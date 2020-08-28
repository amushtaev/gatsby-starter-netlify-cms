import React, {useEffect, useState} from 'react'
import NavRoll from "../components/NavRoll";
import BlogRollPosts from "../components/blog/BlogRollPosts";
import LayoutBlog from "../components/blog/LayoutBlog";

const SearchPage = ({pageContext, search }) => {
  //const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
  const [newSearch, setSearch] = useState(search);
  const {
    slug,
  } = pageContext;
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(document.querySelectorAll(".is-parent.column.is-4").length)
  }, [document.querySelectorAll(".is-parent.column.is-4").length]);

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
      <section>
        <NavRoll active={slug} defaultSearch={search} onSearch={(value) => setSearch(value)} />
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

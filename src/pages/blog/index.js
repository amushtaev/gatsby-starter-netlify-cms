import React from 'react'
import LayoutBlog from '../../components/LayoutBlog'
import BlogRollPosts from '../../components/BlogRollPosts'
import NavRoll from "../../components/NavRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;

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
          <NavRoll data={data} />
        </section>
        <section className="section index Posts">
          <div className="container">
            <div className="content">
              <BlogRollPosts />
            </div>
          </div>
        </section>
      </LayoutBlog>
    )
  }
}

import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import NavRoll from "../../components/NavRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <div
          className=""
        >
          <h1 className="h1-title" >
            SOFTCUBE BLOG
          </h1>
          <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
        </div>
        <section>
          <NavRoll data={data} />
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

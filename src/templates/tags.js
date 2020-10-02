import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import {PricingHeading, PricingPageContainer, SloganSmall} from "../components/pricing/styledComponents";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    console.log(posts, "posts");
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug} className='column is-4' style={{minWidth: '332px'}}>
          <article className="blog-list-item tile is-child box notification ">
          <Link to={post.node.fields.slug.replace('/blog', '')}>
            <header className="header article BlogRoll">
              <div className="featured-thumbnail">
                {post.node.frontmatter.image ?
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.node.frontmatter.image.publicURL,
                      alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                      srcSet: '',
                    }}
                  />
                :
                  <PreviewCompatibleImage
                    imageInfo={{
                      image:  "/img/best-video-format-for-facebook-ads-featured-picture.jpg",
                      alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                      srcSet: '',
                    }}
                  />
                }
              </div>
            </header>
            <div className="short-news-container">
              <p className="post-meta" itemProp="name">
                {post.node.frontmatter.title}
              </p>
              <div className="articl-footer">
                    <span className="date" itemProp="datePublished">
                      {post.node.frontmatter.date}
                    </span>
              </div>
            </div>
          </Link>
          </article>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with `;

    return (
      <Layout>
        <section className="section index Posts">
        <PricingPageContainer>
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="content">
              <div
                className="column"
                style={{ marginBottom: '6rem' }}
              >
                <SloganSmall>{tagHeader}</SloganSmall>
                <PricingHeading>{tag}</PricingHeading>
                <ul className="taglist" style={{marginTop:'64px !important'}}>{postLinks}</ul>
              </div>
            </div>
          </div>
        </PricingPageContainer>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            categories
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;

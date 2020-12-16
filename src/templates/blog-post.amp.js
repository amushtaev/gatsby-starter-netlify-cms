import React from "react";
import Helmet from "react-helmet";
import Content, {HTMLContent} from "../components/Content";
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import styled from "styled-components";

export const BlogTemplateAMP = styled.div`
    width: 100%;
`;

export const BlogLayoutAMP = styled.div`
    width: calc(100% - 100px);
    margin: 0 auto;
    padding: 20px;
    background: #fff;
`;

export const H1 = styled.h1`
    color: #fff;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
`;

export const BlogPostTemplateAMP = (
    {
        content,
        contentComponent,
        description,
        tags,
        title,
        helmet,
        categories,
        slug,
        id,
        image,
        date,
        focuskeyphrase,
        categories_slug,
        metadescription,
        seotitle,
        snippet,
    }
) => {
    const PostContent = contentComponent || Content;
    const siteName = 'Softcube Blog';

    return(
        <BlogTemplateAMP>
            <Helmet titleTemplate='%s | Blog'>
                <title>{`${title}`}</title>
                <meta
                    name='description'
                    content={`${metadescription}`}
                />
                {/* Twitter */}
                <meta name='twitter:card' content='summary' key='twcard' />
                <meta name='twitter:creator' content={seotitle} key='twhandle' />

                {/* Open Graph */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property='og:url' content={slug} key='ogurl' />
                <meta property='og:image' content={image} key='ogimage' />
                <meta property='og:site_name' content={siteName} key='ogsitename' />
                <meta property='og:title' content={seotitle} key='ogtitle' />
                <meta property='og:description' content={metadescription} key='ogdesc' />
                <style amp-custom>

                </style>
            </Helmet>
            <div>
                <H1>
                    SOFTCUBE BLOG
                </H1>
            </div>
            <BlogLayoutAMP>
                <amp-img itemProp="url" itemProp="image" data-flat-attr="yes" className='post_image' src={image} alt={title} ></amp-img>
                <div style={{paddingTop: `8px`}}>
                    {categories && categories.length ? (
                        <>
                            {categories.map((category, index) => (
                                <span className={`post_category ${categories_slug[0]}`} style={{display: `inline-flex`}} key={category + `category`}>
                      <Link style={{color: 'rgba(33,33,33,.8)'}} to={`https://softcube.com/category/${categories_slug[0]}/`}>
                        {category}
                      </Link>
                    </span>
                            ))}
                        </>
                    ) : null}
                    <span itemProp="datePublished" dateTime={date} content={date} className='date' style={{display: `inline-flex`}} >&nbsp;&nbsp;•&nbsp;&nbsp;{date}</span>
                    <span itemProp="author" style={{display: `none`}}  itemScope itemType="http://schema.org/Person">Softcube</span>
                    <span itemProp="publisher" itemScope="" itemType="https://schema.org/Organization" style={{display: `none`}}></span>
                </div>
                <h1 className='title post_title' itemProp="headline">
                    {title}
                </h1>
                <p  itemProp="articleBody">{description}</p>
                <div id='content'>
                    <PostContent content={content} />
                </div>
            </BlogLayoutAMP>
        </BlogTemplateAMP>
    );
}

BlogPostTemplateAMP.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    categories: PropTypes.array,
    id: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    focuskeyphrase: PropTypes.string,
    categories_slug: PropTypes.array,
    seotitle: PropTypes.string,
    metadescription: PropTypes.string,
    snippet: PropTypes.string,
};

const BlogPostAMP = ({ data }) => {
    console.log(data);
    const { markdownRemark: post } = data;
    const { allMarkdownRemark: article } = data;

    return (

            <BlogPostTemplateAMP
                content={post.html}
                id={post.id}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate='%s | Blog'>
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name='description'
                            content={`${post.frontmatter.metadescription}`}
                        />
                    </Helmet>
                }
                categories={post.frontmatter.categories}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                seotitle={post.frontmatter.seotitle}
                metadescription={post.frontmatter.metadescription}
                focuskeyphrase={post.frontmatter.focuskeyphrase}
                categories_slug={post.frontmatter.categories_slug}
                image={post.frontmatter.image ?
                    post.frontmatter.image.publicURL : null
                }
                date={post.frontmatter.date}
                snippet={post.snippet}
            />
    )
};

BlogPostAMP.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
        allMarkdownRemark: PropTypes.object,
    }),
};

export default BlogPostAMP;

export const pageQuery = graphql`
  query BlogPostAMPByID($id: String!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
            node {
                snippet
                html
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    title
                }
            }
        }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        description
        tags
        image {
          publicURL
        }
        categories_slug
        seotitle
        focuskeyphrase
        metadescription
      }
      snippet
      tableOfContents
    }
  }
`;

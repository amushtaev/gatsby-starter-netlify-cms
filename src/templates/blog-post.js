import React, {useEffect, useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { isMobile } from "react-device-detect";
import LayoutBlog from '../components/blog/LayoutBlog';
import Content, { HTMLContent } from '../components/Content';
import NavRoll from '../components/NavRoll';
import facebook from '../img/social/facebook.svg';
import facebookMobile from '../img/social/facebook-m.svg';
import twitter from '../img/social/twitter.svg';
import twitterMobile from '../img/social/twitter-m.svg';
import linkedin from '../img/social/linkedin.svg';
import linkedinMobile from '../img/social/linkedin-m.svg';
import gplus from '../img/social/gplus.svg';
import gplusMobile from '../img/social/gplus-m.svg';
import BlogRollRelated from '../components/blog/BlogRollRelated';
import {ShowMore, TryAiButton} from '../components/pricing/styledComponents';
import useWindowSize from '../components/Getscreen'
import useDebounce from "../components/DebouncedHook";
import StyleForContent from "../components/blog/blog-post.css"
import loadable from "@loadable/component";
const BlogCallToAction = loadable(() => import('../components/blog/BlogCallToAction'));
const BlogRollPostsLatest = loadable(() => import('../components/blog/BlogRollPostsLatest'));
const BlogRoll = loadable(() => import('../components/blog/BlogRoll'));

export const BlogPostTemplate = ({
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
}) => {
  const PostContent = contentComponent || Content;
  const windowSize = useWindowSize();
  const refSlug = typeof window !== 'undefined' && window.location.href;
  const [search, setSearch] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 1500);
  const siteName = 'Softcube Blog';

  const mouseOut = () => {
    console.log("mouseOut")
  };

  const mouseOver = () => {
    console.log("mouseOver")
  };

  useEffect(() => {
    setRedirectTo(true);
  }, [debouncedSearchTerm]);
  //TODO
  if(debouncedSearchTerm && redirectTo){
    if(typeof window !== 'undefined') {
      window.location.href = '/blog'
    }
  }

  useEffect(() => {

  },[]);

  return (
    <section className='section Blog-Post' id={id} itemType="http://schema.org/Article">
      <link rel="canonical" href={slug} />
      <meta name="description" content={metadescription} />
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
      <div className="snippet" dangerouslySetInnerHTML={{ __html: snippet }} />
      <div
        className='index Blog'
        itemScope itemType="http://schema.org/BlogPosting"
      >
        <h1 className='h1-title' >
          SOFTCUBE BLOG
        </h1>
        <h2 className='h2-subtitle'>News, guides, and updates on Google and Facebook marketing</h2>
      </div>
      <NavRoll defaultSearch={''} onSearch={(value) => setSearch(value)} isShowSearch={false} />
      {helmet || ''}
      <div className='container white s__width' style={{position: `relative`}} itemScope="" itemType="https://schema.org/Organization">
        <div className='columns'>
          <div className='column post_column' itemScope itemType="https://schema.org/ImageObject" itemProp="image">
              <img itemProp="url" itemProp="image" data-flat-attr="yes" className='post_image' src={image} alt={title} />
              <div className='is-for-mobile'>
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
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem`, display: `none` }}>
                  <h4>Tags</h4>
                  <ul className='taglist'>
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link itemProp="url" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className='column BlogRollRelated' style={{marginTop: `60px`}}>
                <h3 className='post_related'>
                  you may also like
                </h3>
                <BlogRollRelated categories={categories} id={id}/>
              </div>
            </div>
          </div>
          {!isMobile && windowSize.width > 780 || isMobile && windowSize.width > 780 ?
            <>
              <div className='column back'>
              <Link to='/blog'>
                <span style={{transform: 'rotate(180deg)'}}><ShowMore /></span> <span style={{fontSize: '16px', lineHeight:'20px'}}>Back</span>
              </Link>
              </div>
            <div className='column social'>
              <Link
                title='Facebook'
                to={`https://www.facebook.com/sharer/sharer.php?u=${refSlug}&t=${title}&display=popup&src=like`}
                target='_blank'>
                <img
                  src={facebook}
                  alt='Facebook'
                />
              </Link>
              <Link
                title='Twitter'
                to={`https://www.twitter.com/intent/tweet?url=${refSlug}&via=${description}&text=${title}`}
                target='_blank'>
                <img
                  className='fas fa-lg'
                  src={twitter}
                  alt='Twitter'
                />
              </Link>
              <Link
                title="Linkedin"
                to={`https://www.linkedin.com/shareArticle?mini=true&url=${refSlug}&title=${title}&summary=&source=`}
                target='_blank'>
                <img
                  src={linkedin}
                  alt='Linkedin'
                />
              </Link>
              <Link
                title='gplus'
                to={`https://plus.google.com/share?url=${refSlug}`}
                target='_blank'>
                <img
                  src={gplus}
                  alt='gplus'
                />
              </Link>
            </div>
            </>
            :
            <div className='column social__mob'>
              <Link
                title='Facebook'
                to={`https://www.facebook.com/sharer/sharer.php?u=${refSlug}&t=${title}&display=popup&src=like`}
                target='_blank'>
                <img
                  src={facebookMobile}
                  alt='Facebook'
                />
              </Link>
              <Link
                title='Twitter'
                to={`https://www.twitter.com/intent/tweet?url=${refSlug}&via=${description}&text=${title}`}
                target='_blank'>
                <img
                  className='fas fa-lg'
                  src={twitterMobile}
                  alt='Twitter'
                />
              </Link>
              <Link
                title="Linkedin"
                to={`https://www.linkedin.com/shareArticle?mini=true&url=${refSlug}&title=${title}&summary=source=`}
                target='_blank'>
                <img
                  src={linkedinMobile}
                  alt='Linkedin'
                />
              </Link>
              <Link
                title='gplus'
                to={`https://plus.google.com/share?url=${refSlug}`}
                target='_blank'>
                <img
                  src={gplusMobile}
                  alt='gplus'
                />
              </Link>
            </div>
          }
        </div>
      </div>
      {!isMobile && windowSize.width > 780 ?
      <div className='container' style={{textAlign: 'center', marginTop: '92px'}}>
        <h3
          className='title-try--white latest'>
          LATEST ARTICLES
          <Link
            className="read-more" to={'/blog/'}
          >
            View all blog posts  <span style={{fontSize: '24px', paddingLeft: '15px', lineHeight: '2.7rem'}}>→</span>
          </Link>
        </h3>
        <BlogRollPostsLatest />
        <h3 className='title-try--white' style={{paddingTop: '44px'}}>
          MAKE VIDEO ADS IN TWO CLICKS
        </h3>
        <TryAiButton
          text='Try AI video ad maker'
          onClick={() => {
            //hist.push('/create');
            window.location.href = 'https://app.softcube.com'
          }}
          margin={'52px 0 112px 0'}
        />
      </div>
      :
        <div className='container' style={{textAlign: 'center', marginTop: '92px'}}>
          <h3
            className='title-try--white latest'
            style={{ marginBottom: '0'}}
          >
            you may also like
          </h3>
          <BlogRoll />
          <Link
            className="read-more like" to={'/blog/'}
          >
            View all blog post  <span style={{fontSize: '24px', paddingLeft: '15px', lineHeight: '2.7rem'}}>→</span>
          </Link>
          <h3 className='title-try--white' style={{paddingTop: '117px'}}>
            MAKE VIDEO ADS IN TWO CLICKS
          </h3>
          <TryAiButton
            text='Try AI video ad maker'
            onClick={() => {
              //hist.push('/create');
              window.location.href = 'https://app.softcube.com'
            }}
            margin={'52px 0 70px 0'}
          />
        </div>
      }

      <BlogCallToAction
          attachTo='content'
          text='Create a promotional video for Facebook with us'
          buttonText={"Try for free"}
      />

    </section>
  )
};

BlogPostTemplate.propTypes = {
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

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: article } = data;

  return (
    <LayoutBlog>
      <BlogPostTemplate
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
    </LayoutBlog>
  )
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.object,
  }),
};

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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

import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {PricingHeading} from "../../components/pricing/styledComponents";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <div className="container content">
        <PricingHeading>{`Tags | ${title}`}</PricingHeading>
        <div className="columns" style={{paddingTop:'64px'}}>
          <div
            className="column"
            style={{ marginBottom: '6rem' }}
          >
            <ul className="taglist navbar-start has-text-centered">
              {group.map((tag) => (
                <li key={tag.fieldValue} style={{height: '40px', marginTop: '16px !important'}}>
                  <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className='navbar_item'>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

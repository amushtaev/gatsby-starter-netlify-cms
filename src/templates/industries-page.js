import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import IndustriesVideo from '../components/IndustriesVideo'

export const IndustriesPageTemplate = () => {
  return (
    <section className="section section--gradient">
      <div className="signup-block">
        <h2 className="signup-block__title">FIND THE PERFECT TEMPLATE FOR YOUR VIDEO</h2>
        <input className="pb-form__input pb-form__input--large pb-form__input--full-border" type="text" name="template"
               placeholder="e.g. bestservice.com/bestoffer.html" />
        <div className="pb-form__item pb-form__item--submit">
          <a className="signup-form__submit pb-button pb-button--xl pb-button--primary">Search templates </a>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <IndustriesVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

IndustriesPageTemplate.propTypes = {
  contentComponent: PropTypes.func,
}

const IndustriesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndustriesPageTemplate
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndustriesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndustriesPage

export const aboutPageQuery = graphql`
  query IndustriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

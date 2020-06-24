import React from 'react'
import PropTypes from 'prop-types'
import { IndustriesPageTemplate } from '../../templates/industries-page'

const IndustriesPagePreview = ({ entry, widgetFor }) => (
  <IndustriesPageTemplate
    /*title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}*/
  />
)

IndustriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndustriesPagePreview

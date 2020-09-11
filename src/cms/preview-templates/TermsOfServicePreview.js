import React from 'react'
import PropTypes from 'prop-types'
import { TermsOfServiceTemplate } from '../../templates/terms-of-service'

const TermsOfServicePreview = ({ entry, widgetFor }) => (
  <TermsOfServiceTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TermsOfServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TermsOfServicePreview

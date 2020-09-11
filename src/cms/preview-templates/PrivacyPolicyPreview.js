import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyPolicyTemplate } from '../../templates/privacy-policy'

const PrivacyPolicyPreview = ({ entry, widgetFor }) => (
  <PrivacyPolicyTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

PrivacyPolicyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PrivacyPolicyPreview

import React from 'react'
import PropTypes from 'prop-types'
import { MembershipAgreementTemplate } from '../../templates/membership-agreement'

const MembershipAgreementPreview = ({ entry, widgetFor }) => (
  <MembershipAgreementTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

MembershipAgreementPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MembershipAgreementPreview

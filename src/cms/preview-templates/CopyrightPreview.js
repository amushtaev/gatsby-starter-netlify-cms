import React from 'react'
import PropTypes from 'prop-types'
import { CopyrightTemplate } from '../../templates/copyright'

const CopyrightPreview = ({ entry, widgetFor }) => (
  <CopyrightTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

CopyrightPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CopyrightPreview

import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  const yoastKeyword = entry.getIn(['data', 'yoast_keyword']);
  const categories = entry.getIn(['data', 'category'])
  console.log(yoastKeyword, "yoastKeyword", categories, "categories")
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      yoastKeyword={yoastKeyword}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      category={categories}
    />
  )
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = (data) => {
  console.log(data);
  const { markdownRemark : info } = data.data;
  const title = `${info.frontmatter.siteTitle}`;
  return (
  <div>
    <Helmet title={title} />
    <Navbar siteLogo={info.frontmatter.siteLogo} siteTitle={info.frontmatter.siteTitle}/>
    <div>{data.children()}</div>
  </div>
)
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query RootQuery {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        siteTitle
        siteLogo
      }
    }
  }
`

export default TemplateWrapper

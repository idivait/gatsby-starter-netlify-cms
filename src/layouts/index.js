import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = (data) => {
  console.log(data);

  return (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{data.children()}</div>
  </div>
)
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

// export const pageQuery = graphql`
//   query RootQuery {
//     markdownRemark(id: { eq: "/about" }) {
//       html
//       frontmatter {
//         title
//         sitetitle
//       }
//     }
//   }
// `

export default TemplateWrapper

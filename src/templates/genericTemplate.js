import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import pic04 from '../assets/images/pic04.jpg';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;
    return (
      <Layout>
        <Helmet title={frontmatter.title} />
        <HeaderGeneric
          title={frontmatter.title}
          subtitle={frontmatter.subtitle || ''}
        />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Template;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

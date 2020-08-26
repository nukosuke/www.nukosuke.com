import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';

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
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        <HeaderGeneric
          title={frontmatter.title}
          subtitle={frontmatter.subtitle || ''}
        />
        <div id="main">
          <section id="content" className="main">
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

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

type Result = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: { path: string };
      };
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const genericTemplate = path.resolve(`src/templates/genericTemplate.tsx`);

  const result = await graphql<Result>(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return result.errors
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: genericTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

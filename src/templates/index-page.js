import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export const IndexPageTemplate = ({ title }) => {
  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">Index Page TODO</h1>
        </div>
      </div>
    </section>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.bannerTitle} />
    </Layout>
  );
};

export default IndexPage;

export const menuPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        bannerTitle
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import MenuGrid from '../components/MenuGrid';
import Banner from '../components/Banner';

export const MenuPageTemplate = ({
  title,
  fileDescription,
  sections,
  menuPdf
}) => (
  <div className="section">
    <Banner title={title} />
    <div className="container">
      <MenuGrid sections={sections} />
    </div>
  </div>
);

const MenuPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <MenuPageTemplate
        title={frontmatter.bannerTitle}
        fileDescription={frontmatter.fileDescription}
        sections={frontmatter.sections}
      />
    </Layout>
  );
};

MenuPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default MenuPage;

export const menuPageQuery = graphql`
  query MenuPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        fileDescription
        menuPdf
        section {
          heading
          description
          menuItems {
            name
            price
            description
          }
        }
      }
    }
  }
`;

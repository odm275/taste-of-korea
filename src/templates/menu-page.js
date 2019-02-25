import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import MenuGrid from '../components/MenuGrid';

export const MenuPageTemplate = props => {
  console.log(props);
  return (
    <div className="section">
      <div className="container">
        <MenuGrid />
      </div>
    </div>
  );
};

const MenuPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <MenuPageTemplate />
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

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const MenuPage = props => (
  <div>
    <h1>MenuPage</h1>
  </div>
);

export default MenuPage;

// export const menuPageQuery = graphql`
//   query ProductPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//      section{

//      }
//     }
//   }
// `;

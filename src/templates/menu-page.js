import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import MenuGrid from '../components/MenuGrid';

export const MenuPage = props => (
  <Layout>
    <div className="section">
      <Banner title="Menu" />
      <div className="container">
        <MenuGrid />
      </div>
    </div>
  </Layout>
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

// Menu.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object
//   })
// };

// export const menuPageQuery = graphql`
//   query MenuPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         section {
//           heading
//           description
//           menuItems {
//             name
//             price
//             description
//           }
//         }
//       }
//     }
//   }
// `;

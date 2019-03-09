import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <Banner title={'여보세요'} />
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

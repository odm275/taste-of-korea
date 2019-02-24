import React from 'react';

const Banner = ({ title }) => {
  //  One time colors for Banner, not worth setting up in sass, inline is better here.
  const koreanRed = '#CD2E3A';
  const koreanBlue = '#0047A0';
  return (
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundColor: `${koreanBlue}`
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: `0.5rem 0 0 ${koreanRed}, -0.5rem 0 0 ${koreanRed}`,
          backgroundColor: `${koreanRed}`,
          color: 'white',
          padding: '1rem'
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Banner;

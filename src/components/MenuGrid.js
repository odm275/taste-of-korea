import React from 'react';
import PropTypes from 'prop-types';

const MenuGrid = props => (
  <div className="columns is-multiline is-mobile content">
    <div className="column is-half">
      <div className="columns">
        <div className="column is-three-quarters">CROQUE MADAME</div>
        <div className="column is-one-quarter">9.50</div>
      </div>
      scrambled eggs, gruyère cheese, smoked ham, & béchamel sauce
    </div>
  </div>
);

export default MenuGrid;

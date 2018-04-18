import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class BodyPositions extends Component {
  render() {
    return (
      <div style = {{ 
        padding: '5px',
        border: '4px dotted #E5E5E5',
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
}

// BodyPosition.propTypes = {
//   black: PropTypes.bool
// };

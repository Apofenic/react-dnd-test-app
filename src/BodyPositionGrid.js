import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import BodyPositionWrapper from './BodyPositionWrapper';
// import { moveCard } from './Methods';

class BodyPositionGrid extends Component {
  //function that sets the size of grid to be rendered and the size of the positions in that grid
  renderPositions(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: '200px', height: '200px' }}>
        <BodyPositionWrapper x={x} y={y}>
          {this.renderCardOnBody(x, y)}
        </BodyPositionWrapper>
      </div>
    );
  }
  //determines what position the card should be on and renders the card on the grid on that position
  renderCardOnBody(x, y) {
    const [cardX, cardY] = this.props.cardPositionOnBody;
    if (x === cardX && y === cardY) {
      return <Card />;
    }
  }
  // handlePositionClick(toX, toY) {
  //   moveCard(toX, toY);
  // }

  //renders the grid
  render() {
    const positions = [];
    for (let i = 0; i <64; i++) {
      positions.push(this.renderPositions(i));
    }
    return (
      <div style={{
        margin: '0 auto',
        width: '850px',
        height: '850px',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {positions}
      </div>
    );
  }
}

BodyPositionGrid.propTypes = {
  cardPositionOnBody: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(BodyPositionGrid);


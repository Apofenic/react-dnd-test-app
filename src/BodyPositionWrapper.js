import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodyPositions from './BodyPositions';
import { moveCard } from './Methods';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const BodyPositionTarget = {
  drop(props) {
    moveCard(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class BodyPositionWrapper extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;
    const black = (x + y) % 2 === 1;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <BodyPositions black={black}>
          {this.props.children}
        </BodyPositions>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.05,
          }} />
        }
      </div>
    );
  }
}

BodyPositionWrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, BodyPositionTarget, collect)(BodyPositionWrapper);
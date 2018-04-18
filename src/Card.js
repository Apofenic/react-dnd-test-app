import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

//with only one draggable component, cardSource doesn't need to return anything(??),
//if there are multiple components that could be dragged, then they should return something
//(i.e..{ pieceId: props.id })(??)
const cardSource = {
  beginDrag(props) {
    return {
      ComponentId: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Card extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="Card" style={{
        background: '#E8EBEF',
        padding: '4px',
        width: '90px', 
        height: '90px', 
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
        }}>
        <Button />
      </div>
    );
  }
}

Card.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
//passes the Knight through the 'DragSource" HOC, to make it a draggable component
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
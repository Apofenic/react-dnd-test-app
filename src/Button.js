import React, { Component } from 'react';

// const ButtonSource = {
//   beginDrag(props) {
//     return {
//       componentId: props.id
//     };
//   }
// };

class Button extends Component {
  render() {
    return (
    <button type="button" class="btn btn-primary">Primary</button>
    );
  }
}

export default Button;

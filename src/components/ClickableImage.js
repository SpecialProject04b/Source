import React from 'react';

class MousePositionOnClick extends React.Component {

    handleClick = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
      // You can perform any other actions with the mouse coordinates here
    };
  
    render() {
        let data = this.props.data;
        let styles = this.props.style;
        let index = this.props.index
      return (
        <div onClick={this.handleClick}>
          <img src={data[index].src} style={styles} alt="" onClick={this.handleClick}></img></div>
      );
    }
  }

  export default MousePositionOnClick;
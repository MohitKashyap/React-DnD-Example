import React, {Component} from 'react';
import {DayPilot} from "daypilot-pro-react";

class DraggableItem extends Component {

  render() {
    return (<div className={"draggable-item"} ref={element => {
      if (!element) {
        return;
      }
      DayPilot.Scheduler.makeDraggable({
        element: element,
        id: this.props.id,
        text: this.props.text,
        duration: this.props.days*24*60*60
      })
    }}>{this.props.text}</div>);
  }
}

export default DraggableItem;

import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import DraggableItem from "./DraggableItem";

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeHeaders: [{ "groupBy": "Month" }, { "groupBy": "Day", "format": "d" }],
      scale: "Day",
      days: DayPilot.Date.today().daysInMonth(),
      startDate: DayPilot.Date.today().firstDayOfMonth(),
      onEventMoved: function (args) {
        this.message("Event moved: " + args.e.text() + ", external: " + args.external);
      },
      treeEnabled: true,
    };
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      resources: [
        { name: "Resource A", id: "A" },
        { name: "Resource B", id: "B" },
        { name: "Resource C", id: "C" },
        { name: "Resource D", id: "D" },
        { name: "Resource E", id: "E" },
        { name: "Resource F", id: "F" },
        { name: "Resource G", id: "G" }
      ],
      events: []
    });

  }

  render() {
    let { ...config } = this.state;
    return (
      <div style={{ display: "flex", marginBottom: "30px" }}>

        <div className={"draggable-container"}>
          <div className={"draggable-header"}>Drag items to the Scheduler:</div>

          <DraggableItem id={101} text={"Event name"} days={1}></DraggableItem>
          <DraggableItem id={102} text={"Item #102"} days={2}></DraggableItem>
          <DraggableItem id={103} text={"Item #103"} days={3}></DraggableItem>

        </div>

        <div style={{ flex: 1 }}>
          <DayPilotScheduler {...config} ref={component => this.scheduler = component && component.control} />
        </div>

      </div>
    );
  }
}

export default Scheduler;

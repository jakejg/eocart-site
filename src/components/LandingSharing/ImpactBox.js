import React, { Component } from "react";
import CountUp from "react-countup"; //DOCUMENTATION: https://www.npmjs.com/package/react-countup
import VisibilitySensor from "react-visibility-sensor"; //DOCUMENTATION: https://www.npmjs.com/package/react-visibility-sensor

export default class ImpactBox extends Component {
  state = {
    start: this.props.start,
  };

  endCount = () => {
    this.props.start = this.state.count;
  };

  render(props) {
    return (
      <div className="box">
        <img src={this.props.icon} id="icon" alt="impact logo"></img>
        <div className="impact-text">
          <h2 id="count">
            <CountUp
              start={this.props.start}
              end={this.props.count}
              delay={0.2}
              redraw={false}
              separator=","
              duration={this.props.duration}
              onEnd={() => {
                this.setState({ start: this.props.count });
              }}
              onUpdate={() => {
                this.setState({ start: this.props.count });
              }}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={start}
                  active={this.state.visActive}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p id="stat">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

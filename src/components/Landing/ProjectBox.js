import React, { Component } from "react";
import { Col } from "react-bootstrap";
import pin from "../../images/pin.svg";

export default class ProjectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <Col className="panel-group my-3" xl={4}>
        <div className="panel panel-default">
          <div className="panel-heading p-4">
            <img
              id="project-photo"
              src={this.props.projectImg}
              alt="project"
            ></img>
            <div id="heading-text" className="vertical-center">
              <h3 id="project-title">{this.props.title}</h3>
              <i style={{ fontSize: "16px" }}>
                <img src={pin} height="25px" width="25px" alt="green pin"></img>
                {this.props.location}
              </i>
            </div>
          </div>

          <div
            className={
              this.state.open
                ? "panel-collapse p-4"
                : "panel-collapse panel-close"
            }
          >
            <div className="project-bullets">
              <ul style={{ paddingLeft: "24px" }}>
                {this.props.bullets.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
            <h4 className="box-label mb-4 mt-4">Verifications</h4>
            <div className="project-images">
              {this.props.verifications.map((value, index) => {
                return (
                  <img className="verification-image" src={value} alt=""></img>
                );
              })}
            </div>
            <h4 className="box-label mb-3">Sustainable Development</h4>
            <div className="project-images">
              {this.props.developments.map((value, index) => {
                return <img className="sd-image" src={value} alt=""></img>;
              })}
            </div>
          </div>
          <div className="center mb-3">
            <a
              className="toggle-expand"
              onClick={function () {
                this.setState({ open: !this.state.open });
              }.bind(this)}
            >
              {this.state.open ? "Hide " : "Learn more "}
              <span style={{ fontSize: "0.9em" }}>
                {this.state.open ? <>&and;</> : <>&or;</>}
              </span>
            </a>
          </div>
        </div>
      </Col>
    );
  }
}

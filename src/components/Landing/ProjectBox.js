import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
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
      <Col className="panel">
        <div className="panel-default">
          <div className="panel-heading p-4">
            <img
              id="project-photo"
              src={this.props.projectImg}
              alt="project"
            ></img>
            <div id="heading-text">
              <h3 id="project-title">{this.props.title}</h3>
              <p>{this.props.description}</p>
              <i style={{ fontSize: "16px" }}>
                <img src={this.props.typeIcon} height="25px" width="25px" alt="green pin"></img>
                {this.props.type}
              </i>
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
            <Row className="details">
              <Col className="project-bullets">
                <h4 className="box-label mb-4 mt-4 text-left">Benefits</h4>
                <ul style={{ paddingLeft: "24px" }}>
                  {this.props.bullets.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </Col>
              <Col>
                <Row>
                  <Col>
                      <h4 className="box-label mb-4 mt-4 text-left">Verifications</h4>
                    <div className="project-images">
                      {this.props.verifications.map((value, index) => {
                        return (
                          <img
                            key={index}
                            className="verification-image"
                            src={value}
                            alt={value}
                          ></img>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
                <Row>
                  
                  <Col>
                    <h4 className="box-label mb-3 text-left">UN Goals</h4>
                    <div className="project-images">
                      {this.props.developments.map((value, index) => {
                        return (
                          <img
                            key={index}
                            className="sd-image"
                            src={value}
                            alt={value}
                          />
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={this.props.collageImg} width="100%" />
              </Col>
            </Row>
          </div>
          <div className="center my-3">
            <a
              className="toggle-expand"
              onClick={function () {
                this.setState({ open: !this.state.open });
              }.bind(this)}
            >
              {this.state.open ? "Hide " : "Show more "}
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

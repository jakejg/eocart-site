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
              alt={this.props.altText}
            ></img>
            <div id="heading-text">
              <h3 id="project-title">{this.props.title}</h3>
              <p id="project-description">{this.props.description}</p>
              <div className="project-icon">
                <i >
                  <img src={this.props.typeIcon} height="35px" width="35px" alt="green pin"></img>
                </i>
                <span className="ml-3">{this.props.type}</span>
              </div>
              <div className="project-icon">
                <i>
                  <img src={pin} height="35px" width="35px" alt="project pin"></img>
                  </i>
                  <span className="ml-3">{this.props.location}</span>
              </div>
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
              <Col className="project-bullets">
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
            <Row className="collage-img">
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
              <span style={{ fontSize: "9pt" }}>{this.state.open ? "Hide " : "SHOW MORE "}</span>
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

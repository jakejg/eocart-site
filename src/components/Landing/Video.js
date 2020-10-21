import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player"; //DOCUMENTATION: https://www.npmjs.com/package/react-player

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  state = {
    activeStep: 0,
  };

  clickStep = (step) => {
    this.player.seekTo(step);
    switch (step) {
      case this.props.stepOne:
        this.setState({ activeStep: 1 });
        break;
      case this.props.stepTwo:
        this.setState({ activeStep: 2 });
        break;
      case this.props.stepThree:
        this.setState({ activeStep: 3 });
        break;
      default:
        this.setState({ activeStep: 0 });
    }
  };

  handleProgress = (p) => {
    switch (p.playedSeconds.toFixed(0)) {
      case 0:
        this.setState({ activeStep: 0 });
        break;
      case this.props.stepOne:
        this.setState({ activeStep: 1 });
        break;
      case this.props.stepTwo:
        this.setState({ activeStep: 2 });
        break;
      case this.props.stepThree:
        this.setState({ activeStep: 3 });
        break;
      default:
        break;
    }
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    return (
      <>
        <Row className="notMobile">
          <Col md={8} sm className="video-container">
            <ReactPlayer
              ref={this.ref}
              url={this.props.video}
              playing={true}
              loop={true}
              muted={true}
              progressInterval={1000}
              width="100%"
              height="100%"
              onProgress={this.handleProgress}
            />
          </Col>

          <Col md={4} sm className="steps-container">
            <h1 id="title"> How it works</h1>
            <div id="steps">
              <div
                className="row step"
                onClick={() => this.clickStep(this.props.stepOne)}
              >
                <span
                  className={`line ${
                    this.state.activeStep === 1 ? "line-active" : ""
                  }`}
                ></span>
                <div
                  style={{ marginTop: ".5rem" }}
                  className={`step-one step-content ${
                    this.state.activeStep === 1 ? "step-content-active" : ""
                  }`}
                >
                  <h3>
                    <strong>1. Add in Seconds</strong>
                  </h3>
                  <p>It's free and just takes 2 clicks.</p>
                </div>
              </div>
              <div
                className="row step"
                onClick={() => this.clickStep(this.props.stepTwo)}
              >
                <span
                  className={`line ${
                    this.state.activeStep === 2 ? "line-active" : ""
                  }`}
                ></span>
                <div
                  className={`step-two step-content ${
                    this.state.activeStep === 2 ? "step-content-active" : ""
                  }`}
                >
                  <h3>
                    <strong>2. Shop like Normal</strong>
                  </h3>
                  <p>
                    EcoCart will pop up automatically <br></br> at participating stores.
                  </p>
                </div>
              </div>
              <div
                className="row step"
                onClick={() => this.clickStep(this.props.stepThree)}
              >
                <span
                  className={`line ${
                    this.state.activeStep === 3 ? "line-active" : ""
                  }`}
                ></span>
                <div
                  style={{ marginTop: "1.7rem" }}
                  className={`step-three step-content ${
                    this.state.activeStep === 3 ? "step-content-active" : ""
                  }`}
                >
                  <h3>
                    <strong>3. Save the Planet</strong>
                  </h3>
                  <p>
                    Click the button to make your order <br></br> carbon neutral—for free!
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Container className="forMobile">
          <Row className="justify-content-center">
            <h1
              id="title"
              style={{
                textAlign: "center",
                fontSize: "5rem",
                fontWeight: "bold",
                color: "#0D3C2A",
              }}
            >
              {" "}
              How it works
            </h1>
          </Row>
          <Row className="no-gutters">
            <Col className="mb-4 withArrows" md={12} lg={4}>
              <img
                src={require("../../images/chrome-icon.png")}
                className="reason-icon"
                alt="reason icon"
              ></img>
              <h3 className="reason-title">Add to desktop</h3>
              <p className="reason-description">
                Just put in your email and we'll send you a link to install for free.
              </p>
            </Col>
            <Col className="mb-4 withArrows" md={12} lg={4}>
              <img
                src={require("../../images/sbag.png")}
                className="reason-icon"
                alt="reason icon"
              ></img>
              <h3 className="reason-title">Shop like Normal</h3>
              <p className="reason-description">
                We'll find the carbon emissions of your unique order.
              </p>
            </Col>
            <Col className="mb-4" md={12} lg={4}>
              <img
                src={require("../../images/earth.png")}
                className="reason-icon control-icon"
                alt="reason icon"
              ></img>
              <h3 className="reason-title">Save the Planet</h3>
              <p className="reason-description">
                At no cost to you, we'll make sure your orders are completely
                carbon neutral.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

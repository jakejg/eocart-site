import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $name: String!
    $email: String!
    $message: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        name: $name
        email: $email
        message: $message
      }
    ) {
      success
      data
    }
  }
`;

const tl = gsap.timeline();
const ContactWidget = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const setFormVisible = () => {
    tl.to(".contact_btn", {
      duration: 0.3,
      ease: "power1.out",
      y: 100,
    }).to(".contact_form", 0.5, {
      duration: 0.5,
      ease: "power1.in",
      y: 0,
    });
  };
  const setBtnVisible = () => {
    tl.to(".contact_form", {
      duration: 0.7,
      ease: "power1.out",
      y: 1000,
    }).to(".contact_btn", {
      duration: 0.1,
      ease: "power3.in",
      y: 0,
    });
  };
  return (
    <>
      <button className="contact_btn" onClick={setFormVisible}>
        <span>Contact us</span> <FaEnvelope />
      </button>
      <div className={"contact_form hideform"}>
        <div className="contact_form__header" onClick={setBtnVisible}>
          <FaChevronDown onClick={setBtnVisible} />
          <h4>Contact us</h4>
        </div>
        <div className="contact_form__body">
          <Mutation mutation={CONTACT_MUTATION}>
            {(createSubmission, { loading, error, data }) => (
              <>
                <div>
                  {loading && <p>Loading...</p>}
                  {error && (
                    <p className="error">
                      An unknown error has occured, please try again later...
                    </p>
                  )}
                  {data && (
                    <p className="success">
                      Your message has been sent. <br />
                      We look forward to helping you soon!
                    </p>
                  )}
                </div>
                <Form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    createSubmission({
                      variables: {
                        clientMutationId: "testing",
                        name: nameValue,
                        email: emailValue,
                        message: messageValue,
                      },
                    });
                  }}
                >
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={nameValue}
                      onChange={(event) => {
                        setNameValue(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={emailValue}
                      onChange={(event) => {
                        setEmailValue(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="textarea">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      value={messageValue}
                      onChange={(event) => {
                        setMessageValue(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button block variant="green" type="submit">
                    send
                  </Button>
                </Form>
              </>
            )}
          </Mutation>
        </div>
      </div>
    </>
  );
};

export default ContactWidget;

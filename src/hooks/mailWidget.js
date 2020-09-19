import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hubspot";
import { FaCheck } from "react-icons/fa";

const MailWidget = () => {
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: "7682224",
    formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
  });
  const handleMessage = () => {
    if (data) {
      if (data.status === 200) {
        return (
          <div className="message">
            <span>
              <FaCheck />
            </span>
            Thanks! We emailed you a link to add EcoCart to Chrome
          </div>
        );
      }
    } else if (isError) {
      return (
        <div className="message message-error">
          Something went wrong, Please try agian later.
        </div>
      );
    }
  };

  return (
    <Form className="mailWidget" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="email" name="email" placeholder="Email" />
      </Form.Group>
      <Button block variant="green" type="submit">
        {isLoading ? "Loading..." : "Send Me a Link"}
      </Button>
      {handleMessage()}
    </Form>
  );
};
export default MailWidget;

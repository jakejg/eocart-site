import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hubspot";

export const MailWidget = () => {
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: "7682224",
    formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
  });

  return (
    <form className="mailWidget" onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="email" />
      <Button block variant="green" type="submit">
        {isLoading ? "loading" : "send me link"}
        {console.log(data)}
      </Button>
    </form>
  );
};

export default MailWidget;

import React, { Component } from "react";
import Faq from "react-faq-component"; //DOCUMENTATION: https://www.npmjs.com/package/react-faq-component



export default class FaqBox extends Component {
   data = {
    //left this here so extra line appears on top of this component
    title: ".",
    rows: this.props.faqs
  };
  
   styles = {
    bgColor: "white",
    titleTextColor: "white",
    rowTitleColor: "black",
    rowContentColor: "black",
    arrowColor: "grey",
  };
  
   config = {
    animate: true,
  };
  render() {
    return (
      <div>
        <Faq data={this.data} styles={this.styles} config={this.config} />
      </div>
    );
  }
}

import React from "react";
import Carousel from "react-bootstrap/Carousel"; //DOCUMENTATION: https://react-bootstrap.github.io/components/carousel/
import StarIcon from "mdi-react/StarIcon";
import quote from "../../images/quote.svg";

function Testimonial(props) {
  return (
    <Carousel interval={4000} controls={false}>
      {props.reviews.map((review, index) => {
        return (
          <Carousel.Item>
            <div className="testimonial row">
              <img className="avatar" src={review.avatar} alt="person"></img>
              <div className="text col">
                <img
                  src={quote}
                  height="30px"
                  width="30px"
                  alt="testimony"
                ></img>
                <p className="quote">{review.quote}</p>
                <div
                  className="row align-items-center"
                  style={{ marginLeft: "0px" }}
                >
                  <h3>— {review.author}</h3>
                  <div style={{ marginLeft: "10px" }} className="stars">
                    <StarIcon size={20} color="rgb(12, 60, 42)" />
                    <StarIcon size={20} color="rgb(12, 60, 42)" />
                    <StarIcon size={20} color="rgb(12, 60, 42)" />
                    <StarIcon size={20} color="rgb(12, 60, 42)" />
                    <StarIcon size={20} color="rgb(12, 60, 42)" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Testimonial;

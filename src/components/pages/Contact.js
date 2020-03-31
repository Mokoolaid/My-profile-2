import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>505-307-0528 phone email: dmmaynard64@gmail.com</p>
      <Link
        to={`${props.match.url}/learn`}
        role="button"
        className="btn btn-link"
      >
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;

import React from "react";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import './TestimonialCard.css'

function TestimonialCard({ data }) {
  return (
    <div className="mb-5">
      <Rating className="mb-3" name="read-only" value={data.rating} precision={0.5} readOnly />
      <p>{data.review}</p>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          className="border border-2 p-2 rounded-circle"
          icon={faUser}
        />
        <h4 className="mb-0 ms-4">{data.name}</h4>
      </div>
    </div>
  );
}

export default TestimonialCard;

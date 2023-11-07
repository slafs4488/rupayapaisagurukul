import React from "react";
import "./Hero.css";
import { Button } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import head_img from './../assets/hero.webp'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-page">
        <div className="hero-content">
          <h1>Unlocking Financial Success with RupayaPaisaGurukul</h1>
          <p>
          RupayaPaisaGurukul is a leading online academy dedicated to providing comprehensive financial education. With our expert courses and investment training, achieve financial success like never before.
          </p>
          <Link to="#services">
          <button className="border rounded hero-btn  p-3 mb-4">View All Services</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={head_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

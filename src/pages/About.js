import React, { Component } from 'react';
import "./About.css";
import selfie from "../assets/selfie.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={selfie}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Young Zheng</div>
            <div className="brief_description">
              Hi! I like to draw and play tennis. I am a computer science major at Cornell University.
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
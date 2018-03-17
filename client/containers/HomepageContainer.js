import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="homepage-container">

        <div className="homepage-main-image-container">
          <img className="homepage-main-image" src="/assets/Butterfly_Cover_Image.jpg"></img>
          <div className="main-slogan">
          Butter fly
          </div>
          <div className="main-mini-desc">
            AWEASOME CREATIVE AGENCY ASINGLE PAGE TEMPLATE
          </div>
          {/* <div className="main-signup-button-container">
            <Link to="/signup">
            <button type="button" className="main-signup-button">GET STARTED</button>
            </Link>
          </div> */}

          {/* <div className="postit-view">
            <div className="postit yellow">
              <img className="bulb-img" src="/assets/bulb.png" />
            </div>
            <div className="postit lightyellow">
              N
            </div>
            <div className="postit brightgreen">
              O
            </div>
            <div className="postit pink">
              T
            </div>
            <div className="postit yellow">
              I
            </div>
            <div className="postit blue">
              O
            </div>
            <div className="postit green">
              N
            </div>
          </div> */}
        </div>

        {/* <div className="border-line"/> */}

        <div className="desc-container">
            <div className="left-desc">
              <div className="left-desc-title">
                  ABOUT US
              </div>
              <div className="left-desc-content">
                Butterfly is a modern psd theme made to look awesome on any size
                of screen single page template for creative agency.
              </div>

            </div>

            {/* <div className="right-desc">
              <img className="right-desc-img" src="/assets/collaborator-view-2.png" />
            </div> */}
        </div>

        <div className="team-desc pink">
          Made by Joe Stephens
        </div>

      </div>
    );
  }
}

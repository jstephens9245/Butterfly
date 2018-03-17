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

        </div>

        <div className="desc-container">
            <div className="desc">
              <div className="desc-title">
                  ABOUT US
              </div>
              <div className="desc-content">
                Butterfly is a modern psd theme made to look awesome on any size
                of screen single page template for creative agency.
              </div>

            </div>

        </div>

        <div className="footer pink">
        </div>

      </div>
    );
  }
}

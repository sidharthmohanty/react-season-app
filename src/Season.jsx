import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class Season extends Component {
  state = {
    lat: null,
    errMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderSeason = () => {
    if (this.state.errMessage) {
      return <p>Error: {this.state.errMessage}</p>;
    } else if (!this.state.errMessage && !this.state.lat) {
      return <Loader message="Please accept location request" />;
    } else {
      return <SeasonDisplay lat={this.state.lat} />;
    }
  };

  render() {
    return <div>{this.renderSeason()}</div>;
  }
}
export default Season;

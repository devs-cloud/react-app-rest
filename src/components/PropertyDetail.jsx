import React, { Component } from "react";

class PropertyDetail extends Component {
  render() {
    const { match } = this.props;
    return <h1>Property ID - {match.params.id}</h1>;
  }
}

export default PropertyDetail;

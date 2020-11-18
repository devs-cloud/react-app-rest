import React, { Component } from "react";
import MessagesPropertyTile from "./messagesPropertyTile";
import OffersPropertyTile from "./offersPropertyTile";

class PropertyCardTile extends Component {
  render() {
    const { offerings, messages } = this.props;

    return (
      <table className="table table-dark">
        <tbody>
          <tr>
            <OffersPropertyTile offerings={offerings} />
          </tr>
          <tr>
            <MessagesPropertyTile messages={messages} />
          </tr>
        </tbody>
      </table>
    );
  }

  getCountBadgeClasses(length) {
    let classes = "badge badge-pill badge-";
    classes += length > 0 ? "success" : "secondary";
    return classes;
  }
}

export default PropertyCardTile;

import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";

class OffersPropertyTile extends Component {
  render() {
    const { offerings } = this.props;
    return (
      <React.Fragment>
        <th scope="row">
          <AiIcons.AiFillHome />
        </th>
        <td>Offerings</td>
        <td>
          <span
            style={{ float: "right" }}
            className={this.getCountBadgeClasses(offerings.length)}
          >
            {offerings.length}
          </span>
        </td>
      </React.Fragment>
    );
  }

  getCountBadgeClasses(length) {
    let classes = "badge badge-pill badge-";
    classes += length > 0 ? "success" : "secondary";
    return classes;
  }
}

export default OffersPropertyTile;

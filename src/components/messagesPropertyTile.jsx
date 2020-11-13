import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";

class MessagesPropertyTile extends Component {
  render() {
    const { messages } = this.props;
    return (
      <React.Fragment>
        <th scope="row">
          <FaIcons.FaRegComments />
        </th>
        <td>Messages</td>
        <td>
          <span
            style={{ float: "right" }}
            className={this.getCountBadgeClasses(messages.length)}
          >
            {messages.length}
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

export default MessagesPropertyTile;

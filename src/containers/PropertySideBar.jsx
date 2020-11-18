import React, { Component } from "react";
import "./PropertySideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

class PropertySideBar extends Component {
  state = { sidebar: false };

  showSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  render() {
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={this.showSidebar}
          >
            Filters
          </button>
          <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={this.showSidebar}>
              <div className="navbar-toggle">
                <a href="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </a>
              </div>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className="nav-text">
                    <a>
                      <span onClick={() => this.props.onFilter(item.title)}>
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    );
  }
}

export default PropertySideBar;

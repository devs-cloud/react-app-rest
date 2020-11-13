import React, { Component } from "react";
import PropertyCardTile from "./propertyCardTile";
import { Link } from "react-router-dom";

class PropertyCard extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    const { listing } = this.props;
    const { property } = listing;
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <span style={this.styles} className={this.getBadgeClasses(listing)}>
              {listing.state}
            </span>
            <Link to={`/listing/${listing.id}`}>
              <h6 className="card-title">
                {property.address.addressLine1}
                <br />
                {property.address.city}
                {", "}
                {property.address.state}
              </h6>
            </Link>
            <img
              className="card-img-top"
              src={property.primaryImageUrl}
              alt="home"
            />
            <p>{property.sellerName}</p>
            <p>{property.description}</p>
            <PropertyCardTile
              offerings={property.offerings ? property.offerings : []}
              messages={property.messages ? property.messages : []}
            />
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses(listing) {
    let classes = "badge badge-";
    classes += listing.state === "Active" ? "success" : "secondary";
    return classes;
  }
}

export default PropertyCard;

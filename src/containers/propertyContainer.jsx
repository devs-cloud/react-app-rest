import React, { Component } from 'react'
import PropertyCard from './propertyCard'
import PropertySideBar from './PropertySideBar'

class PropertyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agentId: props.agentId,
      allListings: [],
      listingsToShow: [],
    }
  }

  fetchListings = () => {
    // fetch(`http://localhost:8080/agents/${this.state.agentId}/listings`)
    //   .then((res) => res.json())
    //   .then((allListings) => {
    //     this.setState({ allListings, listingsToShow: allListings });
    //   });
    console.log('updated listings')
    this.filterListing('Active')
  }

  componentDidMount() {
    this.fetchListings()
  }

  filterListing = (listingFilter) => {
    const listings =
      listingFilter === 'All'
        ? this.state.allListings
        : this.state.allListings.filter((l) => l.state === listingFilter)
    this.setState({ listingsToShow: listings })
    console.log('filtered listings by ' + listingFilter)
  }

  render() {
    return (
      <React.Fragment>
        <PropertySideBar onFilter={this.filterListing} />
        <div className="py-5 bg-light">
          <main className="container">
            <div className="row">
              {this.state.listingsToShow.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default PropertyContainer

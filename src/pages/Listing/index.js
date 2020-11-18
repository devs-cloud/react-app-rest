import React, { Component } from 'react'
import PropertyContainer from 'containers/propertyContainer'

class Listing extends Component {
  state = {
    agentId: 2,
  }

  handleIncrement = (counter) => {
    console.log('Event Handler Called', counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    console.log('Event Handler Called', counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <PropertyContainer agentId={this.state.agentId} />
      </React.Fragment>
    )
  }
}

export default Listing

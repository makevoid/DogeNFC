import React  from 'React'
import Comp  from '../comp'

class Address extends Comp {
  render () {
    return (
      <div>
        <label>Your Address:</label>
        <div className="s10" />
        <input type="text" placeholder="1...." value={this.props.address} disabled />
      </div>
    )
  }
}

export default Address
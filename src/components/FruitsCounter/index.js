// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  EatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  EatBanana = () => {
    this.setState(prevState => ({
      mango: prevState.mango,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg_container">
        <div className="inner_container">
          <h1>
            Bob ate <span className="span-css">{mango}</span> mangoes{' '}
            <span className="span-css">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-and-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button onClick={this.EatMango} className="button" type="button">
                Eat Mango
              </button>
            </div>
            <div className="image-and-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image"
              />
              <button onClick={this.EatBanana} type="button" className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

// Write your React code here.
import {Component} from 'react'

/*

In React, the Component class is exported as a 
named export from the 'react' module.
This means that you need to use curly braces {} when importing it

*/

import Emojis from '../Emojis/index'

import './index.css'

class Feedback extends Component {
  state = {changeUI: false}

  changeUIfunc = () => {
    this.setState({changeUI: true})
  }

  renderAuth = () => {
    const {changeUI} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (changeUI) {
      return (
        <>
          <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
          <h1 className="greetHead">Thank You!</h1>
          <p className="greetPara">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </>
      )
    }

    return (
      <>
        <h1 className="innerCardHeading">
          How satisfied are you with our customer support performance?
        </h1>

        <ul className="innerCardEmojiCard">
          {emojis.map(eachObject => (
            <Emojis
              eachObjectProp={eachObject}
              changeUIfuncProp={this.changeUIfunc}
              key={eachObject.id}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    return (
      <div className="bg">
        <div className="innerCard">{this.renderAuth()}</div>
      </div>
    )
  }
}

export default Feedback

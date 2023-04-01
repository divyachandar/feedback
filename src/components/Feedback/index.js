// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  setEmojiSelected = () => {
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(eachEmoji => (
            <li
              key={eachEmoji.id}
              className="emojis-list-item"
              onClick={this.setEmojiSelected}
            >
              <img
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                className="emoji"
              />
              <p className="emoji-caption">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderFeedbackContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback

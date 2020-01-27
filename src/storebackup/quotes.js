// Import statements comes here.
import React from 'react';
class Quotes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage() {
      this.setState({
        input: '',
        messages: this.state.messages.concat(this.state.input)
      });
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input
            value={this.state.input}
            onChange={this.handleChange}/><br/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.state.messages.map( (message, idx) => {
                return (
                   <li key={idx}>{message}</li>
                )
              })
            }
          </ul>
        </div>
      );
    }
  };
// This function renders a component
   /* render() {

        // Whatever is returned is rendered
        return (
            <div id='wrapper'>
            <div id='quote-box'>
              <div id="text">Hua</div>
              <div id="author">techin</div>
              <button class="btn btn-info" id="new-quote">New quote</button>
              <button class="btn btn-primary" id="tweet-quote">tweet</button>
            </div>
          </div>
        )
    }
}*/
export default Quotes;
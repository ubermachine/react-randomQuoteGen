// Import statements comes here.
import React from 'react';
var i=0
var quotes=[1,2,3,4,4,5,5,6,66]
class Quotes extends React.Component {
    constructor(props){
      super(props);
      this.handleClick=this.handleClick.bind(this);
      this.state={
        //i:0,
        //quotes:[1,2,3,4,4,5,5,6,66],
        current:quotes[i]
      }
    }
  
    handleClick(event){
      if(i<quotes.length-1){
      i=i+1}
      else{
        i=0
      }
      this.setState({
       
        current:quotes[i],
        

      });
    }
    render(){
      return(
        <div id='wrapper'>
        <div id='quote-box'>
          <div id="text" >{this.state.current}</div>
          <div id="author">techin</div>
          <button class="btn btn-info" id="new-quote" onClick={this.handleClick}>New quote</button>
          
          <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
          <i class="fa fa-twitter"></i>
      </a>
        </div>
      </div>
      )
    }
}
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
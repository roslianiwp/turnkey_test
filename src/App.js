import React, { Fragment } from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      word: null,
      flipped: null
    }
  }

  // handling onChange from input tag
  handleInput = (e) => {
    e.preventDefault()
    this.setState({word: e.target.value, flipped: this.randomCase(e.target.value)})
  }
  
  // function to make string become uppercase or lowercase
  randomCase = (str) => { 
    let random = '';
    for (let i = 0; i < str.length; i++) {
      if(i % 2 !== 0){
        random += str.charAt(i).toUpperCase();
      } else {
        random += str.charAt(i).toLowerCase();
      }
    }
    return random;
  }
  // result 1 contains uppercased string
  // result 2 contains randomize-cased string
  render () {
    const {word, flipped} = this.state
    return (
      <Fragment>
        <form>
          <p className="h5 text-center mb-4 mt-5">Type your word here</p>
          <div className="grey-text text-center">
            <input placeholder="Type your word" name="word" onChange={(e) => this.handleInput(e)}/>
          </div>
          <div className="text-center">
          </div>
        </form>
        {word? (
          <div>
  
            <p className="h5 text-center mt-5" data-testid="text-content"> Result 1: {word.toUpperCase()}</p>
            <p className="h5 text-center mb-4" data-testid="text-content-flipped"> Result 2: {flipped}</p>
          </div>
        ):false}
      </Fragment>
    )
  }
}

export default App;

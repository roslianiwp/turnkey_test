import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {convertCase, resetForm} from '../../store/actions/actionInput';
import Button from '../../components/Button/Button'
import Input from '../../components/InputForm/Input'
import Results from '../../components/Results/Results'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      word: "",
      clicked: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.showResult = this.showResult.bind(this)
    this.clearResult = this.clearResult.bind(this)
  }

  handleInput = (e) => {
    this.setState({word: e.target.value})
  }

  showResult = async (e) => {
      e.preventDefault()
      const word = this.state.word
      await this.props.convertCase(word)
      this.setState({clicked: !this.state.clicked})
  }

  clearResult = () => {
      this.setState({word:"", clicked:!this.state.clicked})
  }
  
  render () {
      const {word, clicked} = this.state
    return (
      <Fragment>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6" className="justify-content-center">
                    <Input word={word} handleInput={this.handleInput} showResult={this.showResult}/>
                    <Button clicked={clicked} clearResult={this.clearResult} showResult={this.showResult}/>
                </MDBCol>
                <MDBCol md="6" className="justify-content-center">
                    <Results upperCaseWord={this.props.upperCaseWord} randomCaseWord={this.props.randomCaseWord} clicked={clicked}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      upperCaseWord: state.input.upperCased,
      randomCaseWord: state.input.randomCased
    };
};

const mapDispatchToProps = {
  convertCase,
  resetForm,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

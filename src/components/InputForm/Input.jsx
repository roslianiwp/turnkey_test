 
import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { MDBInput } from 'mdbreact';


const Input = ({word, handleInput, showResult}) => {
  return (
    <Fragment>
        <form onSubmit={showResult}>
            <p className="h5 text-center mb-4 mt-5">Type your word here..</p>
            <div className="grey-text">
            <MDBInput label="Your word.." icon="edit" onChange={handleInput} name="word" value={word}/>
            </div>
        </form>
    </Fragment>
  );
};

Input.propTypes = {
    word: PropTypes.string,
    handleInput: PropTypes.func,
    showResult: PropTypes.func
};

export default Input;
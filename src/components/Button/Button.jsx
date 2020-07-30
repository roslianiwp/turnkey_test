 
import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { MDBBtn } from 'mdbreact';


const Button = ({clicked, clearResult, showResult}) => {
  return (
    <Fragment>
        <div className="text-center">
            {clicked? (
                <MDBBtn id="btn-reset" onClick={clearResult}>RESET</MDBBtn>
            ):(
                <MDBBtn id="btn" onClick={showResult}>SUBMIT</MDBBtn>
            )}
        </div>
    </Fragment>
  );
};

Button.propTypes = {
  clicked: PropTypes.bool,
  clearResult: PropTypes.func,
  showResult: PropTypes.func
};

export default Button;
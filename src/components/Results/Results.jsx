 
import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const Results = ({clicked, upperCaseWord, randomCaseWord}) => {
  return (
    <Fragment>
        {clicked? (
            <Fragment>
                <p className="h5 text-center mt-5" data-testid="text-content">Result 1: {upperCaseWord}</p>
                <p className="h5 text-center mb-4" data-testid="text-content-flipped">Result 2: {randomCaseWord}</p>
            </Fragment>
        ): false}
    </Fragment>
  );
};

Results.propTypes = {
  clicked: PropTypes.bool,
  upperCaseWord: PropTypes.string,
  randomCaseWord: PropTypes.string
};

export default Results;
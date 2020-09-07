import React from 'react';
import PropTypes from 'prop-types';
import './result.css';

function Result(props) {
    return(
        <div className='result'>
            You are a <strong>{props.quizResult}</strong>!
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;
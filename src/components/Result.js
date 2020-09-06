import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
    return(
        <div className='result'>
            You prefer <strong>{props.quizResult}</strong>!
        </div>
    );
}

Result.PropTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;
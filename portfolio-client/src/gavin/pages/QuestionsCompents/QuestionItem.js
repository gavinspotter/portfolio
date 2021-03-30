import React from 'react'

import "../../../css/style.css"

const QuestionItem = (props) => {
    return (
        <div className="questions__card">
            {props.question}
        </div>
    )
}

export default QuestionItem

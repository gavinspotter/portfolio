import React from 'react'
import QuestionItem from "./QuestionItem"

import "../../../css/style.css"

const QuestionList = (props) => {
    return (
        <div>
            {
                props.love.map((data) =>
                    <QuestionItem
                        key={data._id}
                        _id={data._id}
                        question={data.question}
                    />)
            }
        </div>
    )
}

export default QuestionList

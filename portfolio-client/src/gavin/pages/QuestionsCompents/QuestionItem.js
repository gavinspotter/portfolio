import React from 'react'

import "../../../css/style.css"
import Input from '../../../shared/components/FormElements/Input'

const QuestionItem = (props) => {
    return (
        <div className="questions__card">
            <div className="questions__card--text">
                {props.question}

            </div>

            <div>
                <form>
                    <Input />

                </form>

            </div>
        </div>
    )
}

export default QuestionItem

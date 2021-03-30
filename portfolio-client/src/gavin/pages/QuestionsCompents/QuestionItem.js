import React from 'react'

import "../../../css/style.css"
import Button from '../../../shared/components/FormElements/Button'
import Input from '../../../shared/components/FormElements/Input'
import { useHttpClient } from "../../../shared/hooks/http-hook"

const QuestionItem = (props) => {



    return (
        <div className="questions__card">
            <div className="questions__card--text">
                {props.question}

            </div>

            <div>
                <form>
                    <Input />
                    <Button> submit </Button>
                </form>

            </div>
        </div>
    )
}

export default QuestionItem

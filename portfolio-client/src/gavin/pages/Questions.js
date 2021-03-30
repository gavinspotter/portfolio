import React, { useContext, useEffect, useState } from 'react'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'


import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"
import QuestionList from './QuestionsCompents/QuestionList'

const Questions = () => {

    const auth = useContext(AuthContext)

    const [loadedQuestions, setLoadedQuestions] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        const fetchQuestions = async () => {

            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/questions/getquestions/${auth.userId}`,
                    "GET",
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }

                )
            } catch (err) {

            }

        }
        fetchQuestions()
    }, [sendRequest, auth.userId])

    return (
        <React.Fragment>

            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (<div>
                <LoadingSpinner />
            </div>)}
            {!isLoading && loadedQuestions && <QuestionList love={loadedQuestions} />}
        </React.Fragment>

    )
}

export default Questions

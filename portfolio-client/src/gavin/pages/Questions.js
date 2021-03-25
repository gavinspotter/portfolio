import React, { useEffect } from 'react'

import { useHttpClient } from "../../shared/hooks/http-hook"

const Questions = () => {


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        const fetchQuestionAnswers = async () => {

            try {
                const responseData = await sendRequest(
                    `http:localhost://5000/api/questions/`
                )
            } catch (err) {

            }

        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default Questions

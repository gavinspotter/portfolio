import React, { useContext, useEffect, useState } from 'react'


import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const Questions = () => {

    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        const fetchQuestions = async () => {

            try {
                const responseData = await sendRequest(
                    `http:localhost://5000/api/questions/${auth.userId}`
                )
            } catch (err) {

            }

        }
        fetchQuestions()
    }, [sendRequest, auth.userId])

    return (
        <div>

        </div>
    )
}

export default Questions

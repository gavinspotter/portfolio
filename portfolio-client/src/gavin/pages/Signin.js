import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../shared/components/FormElements/Input'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"


const Signin = () => {

    const auth = useContext(AuthContext)


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {

        try {
            const responseData = await sendRequest(
                "http:localhost:5000/api/gavin/login",
                "POST",
                JSON.stringify({
                    name: data.name,
                    password: data.password
                }),
                {
                    "Content-Type": "application/json"
                }
            )
            auth.login(responseData.userId, responseData.token)
        } catch (err) {

        }
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div className="login__card">
                {isLoading && <LoadingSpinner asOverlay />}
                <h2> Gavin please login </h2>
                <Input
                    name="login"
                    valRef={register}
                    label="username"
                    element="input"
                />
                <Input
                    name="password"
                    valRef={register}
                    label="password"
                    element="input"
                    type="password"
                />

            </div>
        </React.Fragment>
    )
}

export default Signin

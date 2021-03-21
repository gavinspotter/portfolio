import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"


import { AuthContext } from "./shared/context/auth-context"
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {

  const { token, login, logout, userId } = useAuth();



  return (
    <div>

    </div>
  )
}

export default App


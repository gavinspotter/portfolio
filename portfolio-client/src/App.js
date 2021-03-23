import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Projects from './gavin/pages/Projects';
import Resume from './gavin/pages/Resume';
import Signin from './gavin/pages/Signin';
import Background from './shared/Background';


import { AuthContext } from "./shared/context/auth-context"

import { useAuth } from './shared/hooks/auth-hook';

const App = () => {

  const { token, login, logout, userId } = useAuth();

  let routes

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Resume />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    )

  } else {
    routes = (
      <Switch>
        <Route path="/login" exact>
          <Signin />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    )
  }


  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}
    >

      <Router>
        <Background>
          {routes}
        </Background>
      </Router>


    </AuthContext.Provider>
  )
}

export default App


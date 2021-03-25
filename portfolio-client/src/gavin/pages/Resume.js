import React from 'react'

const Resume = () => {
    return (
        <div>
            <div>
                <h2>Bio</h2>
                My name is Gavin.
            </div>

            <div>
                <h2>Resume</h2>
                <h2>React</h2>
                <h3> packages</h3>
                <ul>
                    <li>react</li>
                    <p> I've used react to import hooks such as useState, useContext, createContext, useCallback, useEffect. </p>
                    <li>react-dom</li>
                    <p> I've used react-dom to link a things directly to the DOM</p>
                    <li>react-router-dom</li>
                    <p> I've used react-router-dom to import things such as BrowserRouter, Route, Redirect, and Switch. </p>
                    <li>react-hook-form</li>
                    <p> I've react-hook-form to process my forms</p>
                    <li>react-transition-group</li>
                    <p> I've used react-transition-group to create transitions for components</p>


                </ul>

            </div>
        </div>
    )
}

export default Resume

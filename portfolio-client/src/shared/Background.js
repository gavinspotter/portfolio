import React from 'react'

import "../css/style.css"

const Background = (props) => {
    return (
        <div className="background__cover">

            {props.children}


        </div>
    )
}

export default Background

import React from 'react'

import "../css/style.css"

const Background = (props) => {
    return (
        <div className="background__cover">
            <div className="background__slide">
                {props.children}
            </div>
        </div>
    )
}

export default Background

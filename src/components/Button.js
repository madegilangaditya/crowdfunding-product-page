import React from 'react'

const Button = ({idBtn, addClass, clicked, text}) => {
    return (
        
        <a id={idBtn} href="#test" className={`btn ${addClass ? addClass : ''}`}  onClick={clicked}>
            {text}
        </a>
        
    )
}

export default Button

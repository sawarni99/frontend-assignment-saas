import React from 'react'
import './Button.css'

/**
 * Component for button.
 * @param name - Name to show inside the button.
 * @param onClick - Function to handle click event.
 * @param disabled - Boolean value to indicate if button is disabled.
 */
function Button({name, onClick, disabled}) {

    const className = disabled?'button-disabled':'button-enabled';

    return (
        <button className={`button ${className}`} onClick={onClick}>{name}</button>
    )
}

export default Button
import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

// button styles from CSS
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

/*button parameters include children (content inside like text/icons),
type (ex. submit), onClick (function to execute when button is clicked),
buttonStyle, and buttonSize

*/
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    linkTo = '/sign-up'
    }) => {
        // if button already has style, set it to its own button style, else set it to STYLES[0]
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        // returns button as a link, with children components inside
        return (
            <Link to = {linkTo} className = 'btn-mobile'>
                <button 
                    className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick = {onClick}
                    type = {type}
                >
                    {children}
                </button>
            </Link>
        )
    }
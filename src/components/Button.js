import React from 'react';
import classes from './Button.module.css'

const Button = (props) => (<button className={classes.btn} onClick={props.onClick}>Close all panels</button>)

export default Button
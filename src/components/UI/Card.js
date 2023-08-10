import React from 'react';
import './Card.css';

const Card = (props) => {
	// Recibe clases y 'children' como props
	const classes = 'card ' + props.className;
	return <div className={classes}>{props.children}</div>;
};

export default Card;

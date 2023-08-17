import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// useState(initialValue), using array destructuring
	const oldVal = props.title;
	const newVal = 'Cambio!';
	const [title, setTitle] = useState(oldVal);

	const clickHandler = () => {
		if (title === oldVal) {
			setTitle(newVal);
		} else {
			setTitle(oldVal);
		}
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};
export default ExpenseItem;

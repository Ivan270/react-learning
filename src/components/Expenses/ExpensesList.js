import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	/* 
	CONDITIONAL RENDERING
	*/
	// JSX content can be stored in variables!
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses Found.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((exp, index) => (
				<ExpenseItem
					key={exp.id}
					title={exp.title}
					amount={exp.amount}
					date={exp.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;

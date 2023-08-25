import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.expenses;
	const [selectedYearFilter, setSelectedYearFilter] = useState('2020');
	const filterExpensesHandler = (filterData) => {
		setSelectedYearFilter(filterData);
	};
	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === selectedYearFilter;
	});
	/* 
	CONDITIONAL RENDERING
	*/
	// JSX content can be stored in variables!
	let expensesContent = <p>No expenses Found.</p>;
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((exp, index) => {
			return (
				<ExpenseItem
					key={exp.id}
					title={exp.title}
					amount={exp.amount}
					date={exp.date}
				/>
			);
		});
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={selectedYearFilter}
					onFilterChange={filterExpensesHandler}
				/>
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;

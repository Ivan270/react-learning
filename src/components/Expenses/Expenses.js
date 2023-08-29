import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={selectedYearFilter}
					onFilterChange={filterExpensesHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;

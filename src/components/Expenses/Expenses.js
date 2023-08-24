import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.expenses;
	const [selectedYearFilter, setSelectedYearFilter] = useState('2020');

	const filterExpensesHandler = (filterData) => {
		console.log(filterData);
		setSelectedYearFilter(filterData);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={selectedYearFilter}
					onFilterChange={filterExpensesHandler}
				/>

				{expenses
					.filter(
						(expense) =>
							expense.date.getFullYear() === parseInt(selectedYearFilter)
					)
					.map((exp, index) => {
						return (
							<ExpenseItem
								key={exp.id}
								title={exp.title}
								amount={exp.amount}
								date={exp.date}
							/>
						);
					})}
			</Card>
		</div>
	);
};

export default Expenses;

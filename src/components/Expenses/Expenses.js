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
				{/* <ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/> */}
				{expenses.map((expense, index) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default Expenses;

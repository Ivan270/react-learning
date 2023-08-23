import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.expenses;
	const [selectedYearFilter, setSelectedYearFilter] = useState('2020');

	let filteredInfoText = '2019, 2021 & 2022';

	if (selectedYearFilter === '2019') {
		filteredInfoText = '2020, 2021 & 2022';
	} else if (selectedYearFilter === '2020') {
		filteredInfoText = '2019, 2021 & 2022';
	} else if (selectedYearFilter === '2021') {
		filteredInfoText = '2019, 2020 & 2022';
	} else {
		filteredInfoText = '2019, 2020 & 2021';
	}

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
				<p>Data for years {filteredInfoText} is hidden</p>
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

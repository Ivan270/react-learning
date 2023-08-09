import './ExpenseDate.css';

export default function ExpenseDate(props) {
	const month = props.date.toLocaleDateString('en-US', { month: 'short' });
	const year = props.date.toLocaleDateString('en-US', { year: 'numeric' });
	const day = props.date.toLocaleDateString('en-US', { day: '2-digit' });

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div expense-date="expense-date__day">{day}</div>
		</div>
	);
}

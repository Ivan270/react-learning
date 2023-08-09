import './ExpenseItem.css';

function ExpenseItem(props) {
	const month = props.date.toLocaleDateString('en-US', { month: 'short' });
	const year = props.date.toLocaleDateString('en-US', { year: 'numeric' });
	const day = props.date.toLocaleDateString('en-US', { day: '2-digit' });

	return (
		<div className="expense-item">
			<div>
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}
export default ExpenseItem;

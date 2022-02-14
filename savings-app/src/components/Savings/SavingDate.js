import React from 'react';

import './SavingDate.css';

function SavingDate(props) {
	// console.log(props);
	const day = props.date.toLocaleString('en-GB', { day: '2-digit' });
	const month = props.date.toLocaleString('en-GB', { month: 'short' });
	const year = props.date.getFullYear();

	// console.log(day, month, year);

	return (
		<div className='saving-date'>
			<div className='saving-date__day'>{day}</div>
			<div className='saving-date__month'>{month}</div>
			<div className='saving-date__year'>{year}</div>
		</div>
	);
}

export default SavingDate;

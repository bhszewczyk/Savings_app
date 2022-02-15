import React, { useState } from 'react';

import './Savings.css';
import SavingItem from './SavingItem';
import Card from '../UI/Card';
import SavingFilter from './SavingsFilter';

function Savings(props) {
	const [choosenYear, setEnteredYear] = useState('');
	const [selectedYearSaving, filterArrayForYear] = useState(props.savings);
	// console.log(selectedYearSaving);

	const filterHandler = (selectedYear) => {
		// console.log(selectedYear);
		setEnteredYear(selectedYear);
		// console.log(props.savings);
		const yearSavings = props.savings.filter((saving) => {
			return saving.date.getFullYear().toString() === selectedYear;
		});
		// console.log(yearSavings);
		filterArrayForYear(yearSavings);
	};

	return (
		<div>
			<Card className='savings'>
				<SavingFilter selection={choosenYear} onFilter={filterHandler} />
				{selectedYearSaving.map((saving) => (
					<SavingItem
						key={saving.id}
						title={saving.title}
						amount={saving.amount}
						date={saving.date}
					></SavingItem>
				))}
			</Card>
		</div>
	);
}

export default Savings;

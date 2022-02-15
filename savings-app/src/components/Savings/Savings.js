import React, { useState } from 'react';

import './Savings.css';
import SavingItem from './SavingItem';
import Card from '../UI/Card';
import SavingFilter from './SavingsFilter';

function Savings(props) {
	const [choosenYear, setEnteredYear] = useState('2022');
	console.log(choosenYear);

	const yearSavings = props.savings.filter((saving) => {
		return saving.date.getFullYear().toString() === choosenYear;
	});

	const filterHandler = (selectedYear) => {
		console.log(selectedYear);
		setEnteredYear(selectedYear);
	};

	return (
		<div>
			<Card className='savings'>
				<SavingFilter selection={choosenYear} onFilter={filterHandler} />
				{yearSavings.map((saving) => (
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

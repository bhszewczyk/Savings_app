import React, { useState } from 'react';

import './Savings.css';
import SavingsList from './SavingsList';
import Card from '../UI/Card';
import SavingFilter from './SavingsFilter';
import SavingsChart from './SavingsChart';

function Savings(props) {
	const [choosenYear, setEnteredYear] = useState('');

	const yearSavings = props.savings.filter((saving) => {
		return saving.date.getFullYear().toString() === choosenYear;
	});

	const filterHandler = (selectedYear) => {
		// console.log(selectedYear);
		setEnteredYear(selectedYear);
	};

	return (
		<div>
			<Card className='savings'>
				<SavingFilter selection={choosenYear} onFilter={filterHandler} />
				<SavingsChart savings={yearSavings} />
				<SavingsList items={yearSavings} />
			</Card>
		</div>
	);
}

export default Savings;

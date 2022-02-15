import React from 'react';

import './SavingsFilter.css';

const SavingsFilter = (props) => {
	// const [choosenYear, setEnteredYear] = useState('');

	const filterChangeHandler = (e) => {
		// setEnteredYear(e.target.value);
		props.onFilter(e.target.value);
	};

	return (
		<div className='savings-filter'>
			<div className='savings-filter__control'>
				<label>Filter by year</label>
				<select value={props.selection} onChange={filterChangeHandler}>
					{/* <option value='2023'>2023</option> */}
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
				</select>
			</div>
		</div>
	);
};

export default SavingsFilter;

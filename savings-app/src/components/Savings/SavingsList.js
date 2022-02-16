import React from 'react';

import './SavingsList.css';
import SavingItem from './SavingItem';

const SavingsList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='savings-list__fallback'>No savings found</h2>;
	}

	return (
		<ul className='savings-list'>
			{props.items.map((saving) => (
				<SavingItem
					key={saving.id}
					title={saving.title}
					amount={saving.amount}
					date={saving.date}
				></SavingItem>
			))}
		</ul>
	);
};

export default SavingsList;

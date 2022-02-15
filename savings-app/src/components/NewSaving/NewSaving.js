import React from 'react';

import './NewSaving.css';
import SavingForm from './SavingForm';

function NewSaving(props) {
	const submitSavingDataHandler = (enteredSavingData) => {
		const savingData = {
			...enteredSavingData,
			id: 'e' + (Math.random().toFixed(2) * 100).toString(),
		};
		props.onAddSaving(savingData);
	};

	return (
		<div className='new-saving'>
			<SavingForm onSavingFormSubmit={submitSavingDataHandler} />
		</div>
	);
}

export default NewSaving;

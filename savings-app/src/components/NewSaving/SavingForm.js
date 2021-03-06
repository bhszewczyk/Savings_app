import React, { useState } from 'react';

import './SavingForm.css';

function SavingForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const [isEditing, setEditing] = useState(false);

	const editHandler = () => {
		setEditing(true);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const savingData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSavingFormSubmit(savingData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');

		setEditing(false);
	};

	let content = <button onClick={editHandler}>Add saving</button>;

	if (isEditing) {
		content = (
			<form onSubmit={submitHandler}>
				<div className='new-saving__controls'>
					<div className='new-saving__control'>
						<label>Expense Title</label>
						<input
							type='text'
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className='new-saving__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className='new-saving__control'>
						<label>Date</label>
						<input
							type='date'
							min='2018-01-01'
							step='2023-12-31'
							value={enteredDate}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className='new-saving__actions'>
					<button onClick={setEditing}>Cancel</button>
					<button type='submit' onClick={setEditing}>
						Add Saving
					</button>
				</div>
			</form>
		);
	}

	return <div>{content}</div>;
}

export default SavingForm;

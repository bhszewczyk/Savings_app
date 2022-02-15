import React, { useState } from 'react';

import Savings from './components/Savings/Savings';
import NewSaving from './components/NewSaving/NewSaving';

const DUMMY_EXPENSES = [
	{
		id: 's1',
		title: 'Coffee Shop',
		amount: 39.99,
		date: new Date(2018, 8, 12),
	},
	{
		id: 's2',
		title: 'Shopping Lidl',
		amount: 232.59,
		date: new Date(2019, 8, 24),
	},
	{
		id: 's3',
		title: 'Shopping Biedronka',
		amount: 154.26,
		date: new Date(2020, 9, 3),
	},
	{
		id: 's4',
		title: 'Allegro',
		amount: 145.88,
		date: new Date(2021, 9, 12),
	},
	{
		id: 's5',
		title: 'Kokonki',
		amount: 215.42,
		date: new Date(2021, 9, 21),
	},
	{
		id: 's6',
		title: 'Wloczki',
		amount: 215.42,
		date: new Date(2022, 1, 16),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	console.log(expenses);

	const addSavingHandler = (expense) => {
		console.log('In App.js');
		setExpenses((prevExpense) => {
			// console.log(prevExpense);
			return [expense, ...prevExpense];
		});
	};

	return (
		<div>
			<h1>Track your savings</h1>
			<NewSaving onAddSaving={addSavingHandler} />
			<Savings savings={expenses} />
		</div>
	);
}

export default App;

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
		date: new Date(2018, 8, 24),
	},
	{
		id: 's3',
		title: 'Shopping Biedronka',
		amount: 154.26,
		date: new Date(2018, 9, 3),
	},
	{
		id: 's4',
		title: 'Allegro',
		amount: 145.88,
		date: new Date(2019, 9, 12),
	},
	{
		id: 's5',
		title: 'Kokonki',
		amount: 215.42,
		date: new Date(2019, 9, 21),
	},
	{
		id: 's6',
		title: 'Winko',
		amount: 67.17,
		date: new Date(2019, 4, 7),
	},
	{
		id: 's7',
		title: 'Wloczki',
		amount: 357.69,
		date: new Date(2020, 2, 16),
	},
	{
		id: 's8',
		title: 'Kolczyki',
		amount: 72.33,
		date: new Date(2020, 1, 26),
	},
	{
		id: 's9',
		title: 'Teleskop',
		amount: 1215.62,
		date: new Date(2021, 2, 16),
	},
	{
		id: 's10',
		title: 'Sluchawki',
		amount: 312.99,
		date: new Date(2021, 4, 7),
	},
	{
		id: 's11',
		title: 'Monitor',
		amount: 615.42,
		date: new Date(2022, 8, 18),
	},
	{
		id: 's12',
		title: 'Szydelko',
		amount: 55.22,
		date: new Date(2022, 10, 22),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	// console.log(expenses);

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

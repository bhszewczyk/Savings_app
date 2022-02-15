import Savings from './components/Savings/Savings';
import NewSaving from './components/NewSaving/NewSaving';

function App() {
	const savings = [
		{
			id: 's1',
			title: 'Coffee Shop',
			amount: 39.99,
			date: new Date(2021, 8, 12),
		},
		{
			id: 's2',
			title: 'Shopping Lidl',
			amount: 232.59,
			date: new Date(2021, 8, 24),
		},
		{
			id: 's3',
			title: 'Shopping Biedronka',
			amount: 154.26,
			date: new Date(2021, 9, 3),
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
	];

	const addSavingHandler = (saving) => {
		console.log('In App.js');
		console.log(saving);
	};

	return (
		<div>
			<h1>Track your savings</h1>
			<NewSaving onAddSaving={addSavingHandler} />
			<Savings savings={savings} />
		</div>
	);
}

export default App;

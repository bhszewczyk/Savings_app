import SavingItem from './components/SavingItem';

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
	return (
		<div>
			<h1>Track your savings</h1>
			{/* <SavingItem props={savings} /> */}
			<SavingItem
				title={savings[0].title}
				amount={savings[0].amount}
				date={savings[0].date}
			/>
			<SavingItem
				title={savings[1].title}
				amount={savings[1].amount}
				date={savings[1].date}
			/>
			<SavingItem
				title={savings[2].title}
				amount={savings[2].amount}
				date={savings[2].date}
			/>
			<SavingItem
				title={savings[3].title}
				amount={savings[3].amount}
				date={savings[3].date}
			/>
			<SavingItem
				title={savings[4].title}
				amount={savings[4].amount}
				date={savings[4].date}
			/>
		</div>
	);
}

export default App;

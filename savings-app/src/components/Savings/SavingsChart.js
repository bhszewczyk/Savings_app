import React from 'react';

import Chart from '../Chart/Chart';

function SavingsChart(props) {
	const chartDataSlices = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	];

	for (const saving of props.savings) {
		const savingMonth = saving.date.getMonth();
		// console.log(saving.date);
		chartDataSlices[savingMonth].value += saving.amount;
	}

	return <Chart chartSlices={chartDataSlices} />;
}

export default SavingsChart;

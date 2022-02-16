import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
	const dataSliceValues = props.chartSlices.map((dataSlice) => dataSlice.value);
	console.log(props.chartSlices);
	const maxAmongMonths = Math.max(...dataSliceValues);
	return (
		<div className='chart'>
			{props.chartSlices.map((dataSlice) => (
				<ChartBar
					key={dataSlice.label}
					value={dataSlice.value}
					maxValue={maxAmongMonths}
					label={dataSlice.label}
				/>
			))}
		</div>
	);
}

export default Chart;

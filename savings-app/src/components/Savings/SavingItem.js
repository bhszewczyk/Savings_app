import React from 'react';

import './SavingItem.css';
import Card from '../UI/Card';
import SavingDate from './SavingDate';

function SavingItem(props) {
	const savingDate = props.date;
	const savingTitle = props.title;
	const expanseAmount = props.amount;
	const savingAmount = (expanseAmount * 0.1).toFixed(2);
	// const savingAmountHardcoded = 3.25;

	// const [title, setTitle] = useState(savingTitle);

	// const clickBtnHandler = () => {
	// 	setTitle('Updated Title');
	// };

	return (
		<Card className='saving-item'>
			{/* <div>{savingDate}</div> */}
			<SavingDate date={savingDate} />
			<div className='saving-item__description'>
				<h2>{savingTitle}</h2>
				<div className='saving-item__price'>{savingAmount} zł</div>
			</div>
			{/* <button onClick={clickBtnHandler}>Edit</button> */}
		</Card>
	);
}

export default SavingItem;

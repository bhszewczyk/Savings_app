import './SavingItem.css';
import SavingDate from './SavingDate';

function SavingItem(props) {
	const savingDate = props.date;
	const savingTitle = props.title;
	const expanseAmount = props.amount;
	const savingAmount = (expanseAmount * 0.1).toFixed(2);
	// const savingAmountHardcoded = 3.25;

	return (
		<div className='saving-item'>
			{/* <div>{savingDate}</div> */}
			<SavingDate date={savingDate} />
			<div className='saving-item__description'>
				<h2>{savingTitle}</h2>
				<div className='saving-item__price'>{savingAmount} zł</div>
			</div>
		</div>
	);
}

export default SavingItem;

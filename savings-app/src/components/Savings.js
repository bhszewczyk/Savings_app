import './Savings.css';
import SavingItem from './SavingItem';

function Savings(props) {
	return (
		<div className='savings'>
			<SavingItem
				title={props.savings[0].title}
				amount={props.savings[0].amount}
				date={props.savings[0].date}
			/>
			<SavingItem
				title={props.savings[1].title}
				amount={props.savings[1].amount}
				date={props.savings[1].date}
			/>
			<SavingItem
				title={props.savings[2].title}
				amount={props.savings[2].amount}
				date={props.savings[2].date}
			/>
			<SavingItem
				title={props.savings[3].title}
				amount={props.savings[3].amount}
				date={props.savings[3].date}
			/>
			<SavingItem
				title={props.savings[4].title}
				amount={props.savings[4].amount}
				date={props.savings[4].date}
			/>
		</div>
	);
}

export default Savings;

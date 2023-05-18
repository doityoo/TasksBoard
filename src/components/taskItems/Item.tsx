import './../../styles/item.css';
// import CheckBox from './Checkbox';
import Text from './Text';

interface ItemProps {
	// onClickCheckBox(id: number): void;
	onClickDeleteButton(id: string): void;
	status: string;
	text: string;
	id: string;
}

const Item = ({ onClickDeleteButton, text, id }: ItemProps) => {
	return (
		<>
			<div className='itemContainer'>
				<div className='textContainer'>
					<Text>{text}</Text>
				</div>
				<button
					className='deleteButton'
					onClick={() => onClickDeleteButton(id)}
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default Item;

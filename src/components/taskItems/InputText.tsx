import { useState } from 'react';
import './../../styles/inputText.css';
import { database } from '../../../src/services/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

interface ListTypes {
	id: number;
	status: string;
	text: string;
}

const InputText = () => {
	const [isStatus, setIsStatus] = useState<string>('');
	const [inputText, setInputText] = useState<string>('');
	// const nextId = useRef(0);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsStatus(e.target.value);
	};

	const submitHandler = async (e: any) => {
		e.preventDefault();
		const item: ListTypes = {
			id: Date.now(),
			status: isStatus,
			text: inputText,
		};
		if (!isStatus || !inputText) {
			return console.log('Please write or select!');
		}
		const colAdd = collection(database, 'TasksBoard');
		try {
			await addDoc(colAdd, item);
			console.log('Send Data!');
		} catch {
			console.log('Not send Data!');
		}
		setInputText('');
		// nextId.current += 1;
		window.location.reload();
	};

	return (
		<form className='input_wrap'>
			<input
				type='text'
				className='inputText'
				placeholder='After writing the content, press the enter key'
				onChange={(e) => setInputText(e.target.value)}
				// onKeyPress={(e) => onKeyPress(e)}
				value={inputText}
			/>
			<div className='input_radio_wrap'>
				<label>
					<input
						type='radio'
						name='taskboard'
						value='todo'
						checked={isStatus === 'todo'}
						onChange={handlerChange}
					/>
					Todo
				</label>
				<label>
					<input
						type='radio'
						name='taskboard'
						value='inProgress'
						checked={isStatus === 'inProgress'}
						onChange={handlerChange}
					/>
					In Progress
				</label>
				<label>
					<input
						type='radio'
						name='taskboard'
						value='done'
						checked={isStatus === 'done'}
						onChange={handlerChange}
					/>
					Done
				</label>
			</div>
			<button onClick={submitHandler}>입력</button>
		</form>
	);
};

export default InputText;

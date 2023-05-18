import { useState } from 'react';
import './../../styles/inputText.css';
import { db } from '../../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

interface ListTypes {
	id: string;
	status: string;
	text: string;
}

const InputText = () => {
	const [isStatus, setIsStatus] = useState<string>('');
	const [inputText, setInputText] = useState<string>('');
		const [errMSG, setErrMSG] = useState('');

	// const nextId = useRef(0);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsStatus(e.target.value);
	};

	const submitHandler = async (e: any) => {
		e.preventDefault();
		const item: ListTypes = {
			id: Date.now().toString(),
			status: isStatus,
			text: inputText,
		};
		if (!isStatus || !inputText) {
			return setErrMSG('Please write or select!');
		}
		const colAdd = collection(db, isStatus);
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
						value='Todo'
						checked={isStatus === 'Todo'}
						onChange={handlerChange}
					/>
					Todo
				</label>
				<label>
					<input
						type='radio'
						name='taskboard'
						value='In Progress'
						checked={isStatus === 'In Progress'}
						onChange={handlerChange}
					/>
					In Progress
				</label>
				<label>
					<input
						type='radio'
						name='taskboard'
						value='Done'
						checked={isStatus === 'Done'}
						onChange={handlerChange}
					/>
					Done
				</label>
			</div>
			{errMSG ? <div className='input_errMsg'>{errMSG}</div> : ''}
			<button onClick={submitHandler}>입력</button>
		</form>
	);
};

export default InputText;

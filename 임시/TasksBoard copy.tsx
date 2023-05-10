// import './../styles/tasksBoard.css';
// import { useRef, useState } from 'react';
// import Item from '../components/taskItems/Item';
// import InputText from '../components/taskItems/InputText';

// interface ListTypes {
// 	id: number;
// 	text: string;
// 	completed: boolean;
// }

// const TasksBoard = () => {
// 	const [inputText, setInputText] = useState('');
// 	const [todos, setTodos] = useState<ListTypes[]>([
// 		// {
// 		// 	id: 1,
// 		// 	text: 'test',
// 		// 	completed: false,
// 		// },
// 	]);
// 	const nextId = useRef(0);

// 	// 체크박스 핸들러
// 	const handleClickCheckBox = (id: number) => {
// 		setTodos(
// 			todos.map((todo) =>
// 				todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 			)
// 		);
// 	};
// 	// 삭제버튼 핸들러
// 	const handleClickDeleteButton = (id: number) => {
// 		setTodos(todos.filter((todo) => todo.id !== id));
// 	};
// 	// 입력값 변경 핸들러
// 	const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setInputText(e.target.value);
// 	};
// 	// 입력값 엔터 핸들러
// 	const handleInputTextKeyPress = (
// 		e: React.KeyboardEvent<HTMLInputElement>
// 	) => {
// 		if (e.key === 'Enter') {
// 			const newList: ListTypes = {
// 				id: nextId.current,
// 				text: inputText,
// 				completed: false,
// 			};
// 			setTodos(todos.concat(newList));
// 			setInputText('');
// 			nextId.current += 1;
// 		}
// 	};

// 	return (
// 		<div className='mainContainer'>
// 			<div className='appContainer'>
// 				{todos.map((todo) => (
// 					<Item
// 						key={todo.id}
// 						id={todo.id}
// 						text={todo.text}
// 						completed={todo.completed}
// 						onClickCheckBox={handleClickCheckBox}
// 						onClickDeleteButton={handleClickDeleteButton}
// 					/>
// 				))}
// 				<InputText
// 					onChange={handleInputTextChange}
// 					onKeyPress={handleInputTextKeyPress}
// 					inputText={inputText}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default TasksBoard;

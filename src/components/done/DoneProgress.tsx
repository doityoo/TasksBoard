import { useEffect, useState } from 'react';
import Item from '../taskItems/Item';
import { database } from '../../../src/services/firebase-config';
import {
	collection,
	getDocs,
	where,
	query,
	deleteDoc,
	doc,
} from 'firebase/firestore';

interface ListTypes {
	id: number;
	status: string;
	text: string;
}

const Done = () => {
	const [todos, setTodos] = useState<ListTypes[]>([]);
	// const todoList = todoHandler();

	useEffect(() => {
		getDatas();
	}, []);

	// 삭제버튼 핸들러
	// const handleClickDeleteButton = (id: number) => {
	// 	setTodos(todos.filter((todo) => todo.id !== id));
	// };
	const handleClickDeleteButton = (id: number) => {
		const docRef = doc(database, 'TasksBoard');
		where('id', '==', id);
		deleteDoc(docRef)
			.then(() => {
				console.log('Entire Document has been deleted successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
		// let todoItems: any[] = [];
		// todoDatas.forEach((doc) => {
		// 	todoItems.push(doc.data());
		// });
		// setTodos(todoItems);
	};

	const getDatas = async () => {
		const docRef = query(
			collection(database, 'TasksBoard'),
			where('status', '==', 'done')
		);
		const todoDatas = await getDocs(docRef);
		let todoItems: any[] = [];
		todoDatas.forEach((doc) => {
			todoItems.push(doc.data());
		});
		setTodos(todoItems);
	};

	return (
		<div className='mainContainer'>
			<div className='appContainer'>
				<div className='sectionTitle'>Done</div>
				{todos.map((todo) => (
					<Item
						key={todo.id}
						id={todo.id}
						text={todo.text}
						status={todo.status}
						// onClickCheckBox={handleClickCheckBox}
						onClickDeleteButton={handleClickDeleteButton}
					/>
				))}
			</div>
		</div>
	);
};

export default Done;

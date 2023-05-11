import { useEffect, useRef, useState } from 'react';
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

const TodoProgress = () => {
	const [todos, setTodos] = useState<ListTypes[]>([]);

	useEffect(() => {
		getDatas();
	}, []);

	// 삭제버튼 핸들러
	const handleClickDeleteButton = async (id: number) => {
		const docRef = doc(database, 'TasksBoard', id.toString()); // 삭제할 데이터의 문서 참조 가져오기
		try {
			await deleteDoc(docRef); // 문서 삭제
			console.log('Data deleted!');
			setTodos([...todos.filter((todo) => todo.id !== id)]);
		} catch {
			console.log('Failed to delete data!');
		}
		console.log(todos)
		window.location.reload();
	};

	const getDatas = async () => {
		const docRef = query(
			collection(database, 'TasksBoard'),
			where('status', '==', 'todo')
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
				<div className='sectionTitle'>Todo</div>
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

export default TodoProgress;

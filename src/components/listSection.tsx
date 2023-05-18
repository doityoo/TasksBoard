import { useEffect, useRef, useState } from 'react';
import Item from './taskItems/Item';
import { db } from '../firebase-config';
import {
	collection,
	doc,
	deleteDoc,
	onSnapshot,
	DocumentData,
	QueryDocumentSnapshot,
} from 'firebase/firestore';

interface ListTypes {
	id: string;
	status: string;
	text: string;
}

interface ListSectionProps {
	status: string;
}

const ListSection: React.FC<ListSectionProps> = ({ status }) => {
	const [todos, setTodos] = useState<ListTypes[]>([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, status), (snapshot) => {
			const updatedTodos = snapshot.docs.map(
				(doc: QueryDocumentSnapshot<DocumentData>) => ({
					id: doc.id,
					status: doc.data().status,
					text: doc.data().text,
				})
			);
			setTodos(updatedTodos);
		});

		return () => unsubscribe();
	}, []);

	const handleDelete = async (id: string) => {
		try {
			await deleteDoc(doc(db, status, id));
			console.log('Todo deleted successfully!');
		} catch (error) {
			console.error('Error deleting todo:', error);
		}
	};

	return (
		<div className='mainContainer'>
			<div className='appContainer'>
				<div className='sectionTitle'>{status}</div>
				{todos.map((todo) => (
					<Item
						key={todo.id}
						id={todo.id}
						text={todo.text}
						status={todo.status}
						// onClickCheckBox={handleClickCheckBox}
						onClickDeleteButton={handleDelete}
					/>
				))}
			</div>
		</div>
	);
};

export default ListSection;

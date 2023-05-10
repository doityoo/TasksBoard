import { Route, Routes } from 'react-router-dom';
import TasksBoard from './pages/TasksBoard';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<TasksBoard />} />
			</Routes>
		</>
	);
};
export default App;

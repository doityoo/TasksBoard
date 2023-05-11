import './../styles/tasksBoard.css';
import SectionLayout from '../components/ui/SectionLayout';
import TodoProgress from '../components/todo/TodoProgress';
import InProgressSection from '../components/inProgress/InProgress';
import DoneProgress from '../components/done/DoneProgress';
import { Fragment } from 'react';
import InputText from '../components/taskItems/InputText';

const TasksBoard = () => {
	return (
		<Fragment>
			<InputText />
			<SectionLayout>
				<TodoProgress />
				<InProgressSection />
				<DoneProgress />
			</SectionLayout>
		</Fragment>
	);
};

export default TasksBoard;

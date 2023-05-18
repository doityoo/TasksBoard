import './../styles/tasksBoard.css';
import SectionLayout from '../components/ui/SectionLayout';
import { Fragment } from 'react';
import InputText from '../components/taskItems/InputText';
import ListSection from '../components/listSection';


const TasksBoard: React.FC = () => {
	return (
		<Fragment>
			<InputText />
			<SectionLayout>
				<ListSection status='Todo' />
				<ListSection status='In Progress' />
				<ListSection status='Done' />
			</SectionLayout>
		</Fragment>
	);
};

export default TasksBoard;

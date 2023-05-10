interface TaskType {
	id: number;
	status: string;
	text: string;
}

export const taskList: TaskType[] = [
	{
		id: 0,
		status: 'todo',
		text: 'This is Todo section',
	},
	{
		id: 1,
		status: 'inProgress',
		text: 'This is inProgress section',
	},
	{
		id: 2,
		status: 'done',
		text: 'This is done section',
	},
];

export const addItem = (el: TaskType) => {
  console.log(taskList.length)
  taskList.push(el);
  return taskList;
};

export const AddItems = (el: TaskType) => { 
  return fetch('/')
}

export const todoHandler = () => {
	return taskList.filter((task) => task.status === 'todo');
};

export const inProgressHandler = () => {
	return taskList.filter((task) => task.status === 'inProgress');
};

export const doneHandler = () => {
	return taskList.filter((task) => task.status === 'done');
};

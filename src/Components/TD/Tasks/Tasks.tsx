import React, {FC} from 'react';
import {AddedNewTaskFrame, TasksStyle, Wrapper} from './TasksStyle';
import {useToDoStore} from '../../data/stores/ToDoStore';
import {NewItemTasks} from '../ItemTasks/NewItemTasks';
// import {Button} from 'antd';
import InputTask from "../InputTask";

export const Tasks: FC = () => {
    const [active, setActive] = React.useState(true);
    const [
        tasks,
        createTask,
        removeTask,
        updateTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.removeTask,
        state.updateTask
    ])
    console.log(tasks)
    return (
        <Wrapper>
            <AddedNewTaskFrame>
                {active && ((<NewItemTasks
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }
                    }
                />))}
                <button onClick={() => setActive(prevState => !prevState)}> {active ? 'Hide' : 'Create new item'}</button>
            </AddedNewTaskFrame>
            <TasksStyle>
                {!tasks.length && (
                    <p> There is no one tasks</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </TasksStyle>
        </Wrapper>
    )
};

export default Tasks;
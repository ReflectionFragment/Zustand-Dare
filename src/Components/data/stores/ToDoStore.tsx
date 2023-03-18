import create from 'zustand'
import {generateId} from '../Helpers';

interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id:'1',
            title:'asdfads2',
            createdAt:3,
            des:"assasa",
        },
        {
            id:'121',
            title:'2asdfdf32',
            createdAt:343,
            des:"jkll",
        }
    ],
    createTask: (title) => {
        const {tasks} = get();
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }
        set({
            tasks: [newTask].concat(tasks)
        })
    },
    updateTask: (id: string, title: string) => {
        const {tasks} = get();
        if (Array.isArray(tasks)){set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })}

    },
    removeTask: (id: string) => {
        const {tasks} = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        });

    },
}));
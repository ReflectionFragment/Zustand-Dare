import React from 'react';

import styles from './NewItemTasks.module.scss';
import {Button} from 'antd';

export interface NewItemTasksProps {

    onAdd: (title: string) => void;
}

export const NewItemTasks: React.FC<NewItemTasksProps> = ({onAdd}) => {
    const [inputValue, setInputValue] = React.useState('');
    const addTask = React.useCallback(()=>{
        onAdd(inputValue);
        setInputValue('');
    },[inputValue, onAdd])
    return (
        <div className={styles.NewItemTasks}>
            <input type="text"
                   className={styles.NewItemTasksInput}
                   value={inputValue}
                   onChange={(evt) => {
                       setInputValue(evt.target.value)
                   }}
                   onKeyDown={(evt) => {
                    if (evt.key === 'Enter'){addTask()}
                   }}
                   placeholder='Type you dare'
            />
            <Button onClick={() => {
                addTask();
            }}
                           aria-label='add'
                           className={styles.NewItemTasksButton}></Button>
        </div>
    );
}
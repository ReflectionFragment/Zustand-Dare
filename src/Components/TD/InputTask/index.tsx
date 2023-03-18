import React from 'react';
import styles from './index.module.scss';

import edit from '../../../img/edit.svg'
import trash from '../../../img/trash.svg'

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (title: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}

const InputTask: React.FC<InputTaskProps> = ({
                                                        id,
                                                        title,
                                                        onDone,
                                                        onEdited,
                                                        onRemoved,
                                                    }) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <div className={styles.inputTask}>
            <input
                type='checkbox'
                checked={checked}
                className={styles.inputTaskCheckbox}
                onChange={ (evt)=>{
                    if (evt.target.checked){onDone(id)
                    }}
                }
            />
            <label
            className={styles.inputTaskLabel}>
                {title}


            </label>
           <div>

               <button
                   aria-label='Edited'
                   className={styles.inputTaskEdit}
                   onClick={() => {
                       // setChecked(prevState => !prevState)
                   }}>
                   <img src={edit} />
               </button>


              <button
                  className={styles.inputTaskRemove}
                  aria-label='Remove'
                      onClick={() => {
                          if (window.confirm('are you sure about this?')){
                              onRemoved(id);
                              console.log(id)
                          }
                      }
                  }
              >
                  <img src={trash}/>
              </button>
           </div>
        </div>
    );
}
export default InputTask;
import React, {FC} from 'react';
import {ToDoStyle, Wrapper} from './ToDoStyle';
import Tasks from "./Tasks/Tasks";
import {Descriptions} from "./Description/Descriptions";

export const ToDo: FC = () => {
    return(
       <Wrapper>
           <ToDoStyle>
               <Tasks/>
               <Descriptions/>
           </ToDoStyle>

       </Wrapper>
    )
};

export default ToDo;
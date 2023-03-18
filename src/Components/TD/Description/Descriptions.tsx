import React, {FC} from 'react';
import {useToDoStore} from '../../data/stores/ToDoStore';
import {DescriptionsStyle, HeaderDescriptionsStyle, Wrapper} from './DescriptionsStyle';

export const Descriptions: FC = () => {

    const [task] =useToDoStore(state=>[
        state.tasks
    ])

    return (
        <Wrapper>
            1234
            <DescriptionsStyle>
                й
                <HeaderDescriptionsStyle>
                    Header
                </HeaderDescriptionsStyle>
                  q
            </DescriptionsStyle>
            4321
        </Wrapper>
    )
};

export default Descriptions;
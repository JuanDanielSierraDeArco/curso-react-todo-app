import React from 'react';
import { TodoIcon } from './index';

const CompleteIcon = ({ completed, onCompleted }) => {
    return (
        <TodoIcon
            type="check"
            color = {completed ? '#c084fc' : '#6b6b6b'}
            onClick={onCompleted}
        />
    );
}

export { CompleteIcon };
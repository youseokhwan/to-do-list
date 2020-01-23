import React from 'react';
import { ListGroupItem } from 'reactstrap';

const TodoItem = ({item}) => {
    const { id, content, done } = item;
    return (
        <ListGroupItem>{content}</ListGroupItem>
    );
};

export default TodoItem;
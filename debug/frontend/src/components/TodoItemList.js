import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'reactstrap';

const TodoItemList = ({items, onToggle}) => {
    return (
        <div>
            <ListGroup>
                {items.map(item => (
                    <TodoItem item={item} key={item.id} onToggle={onToggle}/>
                ))}
            </ListGroup>
        </div>
    );

}
export default TodoItemList;
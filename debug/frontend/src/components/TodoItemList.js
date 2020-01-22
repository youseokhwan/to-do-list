import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'reactstrap';

const TodoItemList = ({items}) => {
    return (
        <div>
            <ListGroup>
                {items.map(item => (
                    <TodoItem item={item} key={item.id}/>
                ))}
            </ListGroup>
        </div>
    );

}
export default TodoItemList;
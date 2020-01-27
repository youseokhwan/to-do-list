import React, { useState, useCallback, useRef } from 'react';
import InputBox from './components/InputBox';
import AppTeamplate from './components/AppTemplate';
import TodoItemList from './components/TodoItemList';

const App = (props) => {
  const [items, setItems] = useState([
    {
      id: 0,
      content: "롤 하기 ~",
      done: false
    },
    {
      id: 1,
      content: "노드 4장까지 끝내기",
      done: false
    },
    {
      id: 2,
      content: "리액트 프론트 짜기~~",
      done: false
    }
  ]);

  const nextIndex = useRef(4);

  const onInsert = useCallback(
    text => {
      const item = {
          id: nextIndex.current,
          content: text,
          done: false
      };
      setItems(items.concat(item));
      nextIndex.current += 1;
    },
    [items],
  );

  const onToggle = useCallback(
    id => {
      // 토글 시에 done의 상태를 변경시킨다.
      setItems (
          items.filter(item => item.id !== id)
          // item.id === id? {...item, done: !item.done} : item,
      );
    },
    [items],
  );

  return (
    <div>
      <AppTeamplate>
        <InputBox onInsert={onInsert}/>
        <TodoItemList items={items} onToggle={onToggle}/>
      </AppTeamplate>
    </div>
  );
};

export default App;
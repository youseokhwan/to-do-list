import React, {useState, useCallback} from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const InputBox = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=> {
        setValue(e.target.value);
    }, []);

    const onClick = useCallback(
        e => {
            onInsert(value);
            setValue('');
        },
        [onInsert, value]
    );
    return (
        <InputGroup>
            <Input placeholder="오늘의 일정을 입력하세요!" value={value} onChange={onChange}/>
            <InputGroupAddon addonType="append">
                <Button color="primary" onClick={onClick}>+</Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default InputBox;
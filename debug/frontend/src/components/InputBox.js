import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const InputBox = (props) => {
    return (
        <InputGroup>
            <Input placeholder="오늘의 일정을 입력하세요!"/>
            <InputGroupAddon addonType="append">
                <Button color="primary">+</Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default InputBox;
import styled from 'styled-components';
import * as React from 'react';
import { tinyGray, lightGray, darkGray } from '../theme';
import { Text } from '../common/Text';

interface IInput {
  append?: boolean;
  text?: string;
  onClick: () => void;
  onChange: (obj) => void;
}

interface IAppendBox {
  text: string;
  onClick: () => void;
}

const InputRow = styled.div`
  position: relative;
  width: 100%;
`;

const InputBox = styled.input`
  position: absolute;
  padding: 5px 10px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid ${lightGray};
  box-sizing: border-box;
  height: 40px;
  cursor: text;
  color: ${darkGray};
`;

const Button = styled.div`
  position: absolute;
  padding: 0 20px;
  right: 0;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
`;

const AppendBox = ({ text, onClick }: IAppendBox) => {
  return (
    <Button onClick={onClick}>
      <Text type="green-text" bold>
        {text}
      </Text>
    </Button>
  );
};

export const Input = ({
  append = false,
  text = '',
  onClick,
  onChange
}: IInput) => {
  return (
    <InputRow>
      <InputBox onChange={onChange} />
      {append && <AppendBox text={text} onClick={onClick} />}
    </InputRow>
  );
};

import styled from 'styled-components';
import * as React from 'react';
import _ from 'lodash';
import { darkGray, lightBlue, lightGray, green } from '../theme';
import { Text } from './Text';

interface IButton {
  children: any;
  type?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Wrapper = styled.button`
  margin: 0;
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  padding: 8px 25px;
  display: inline-block;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  &.submit {
    background: ${green};
  }
  &.primary {
    background: ${lightBlue};
  }
  &.disabled {
    background: ${darkGray};
    cursor: not-allowed;
  }
`;

export const Button = ({
  children,
  type = 'submit',
  mr,
  mt,
  mb,
  disabled = false,
  onClick
}: IButton) => {
  return (
    <Wrapper
      disabled={disabled}
      mt={mt}
      mb={mb}
      mr={mr}
      className={_.compact([type, disabled && 'disabled']).join(' ')}
      onClick={onClick}
    >
      <Text type="white-text">{children}</Text>
    </Wrapper>
  );
};

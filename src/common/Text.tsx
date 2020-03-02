import styled from 'styled-components';
import * as React from 'react';
import _ from 'lodash';
import { bitGray, darkGray, lightGray, green, red } from '../theme';

interface IText {
  children: any;
  type?: string;
  inline?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  nowrap?: boolean;
  maxwidth?: string;
  mr?: string;
  mb?: string;
}

const Wrapper = styled.p`
  margin: 0;
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  max-width: ${props => props.maxwidth};
  &.bold {
    font-weight: bold;
  }
  &.inline {
    display: inline-block;
  }
  &.nowrap {
    white-space: nowrap;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  &.text {
    font-size: 14px;
    color: ${darkGray};
  }
  &.title {
    font-size: 18px;
    color: ${darkGray};
  }
  &.sub-text {
    font-size: 12px;
    color: ${lightGray};
  }
  &.sub-dark {
    font-size: 12px;
    color: ${darkGray};
  }
  &.green-text {
    font-size: 12px;
    color: ${green};
  }
  &.red-text {
    font-size: 12px;
    color: ${red};
  }
  &.white-text {
    font-size: 14px;
    color: ${bitGray};
  }
`;

export const Text = ({
  children,
  type = 'text',
  inline,
  bold = false,
  uppercase = false,
  nowrap = false,
  maxwidth = 'none',
  mr,
  mb
}: IText) => {
  return (
    <Wrapper
      mb={mb}
      mr={mr}
      maxwidth={maxwidth}
      className={_.compact([
        type,
        bold && 'bold',
        inline && 'inline',
        uppercase && 'uppercase',
        nowrap && 'nowrap'
      ]).join(' ')}
    >
      {children}
    </Wrapper>
  );
};

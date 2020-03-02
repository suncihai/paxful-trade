import styled from 'styled-components';
import * as React from 'react';
import { tinyGray } from '../theme';

interface IInfoCell {
  children: any;
  rb?: string;
  bb?: string;
}

const Wrapper = styled.div`
  display: table;
  width: 50%;
  height: 80px;
  box-sizing: border-box;
  text-align: center;
  border-right: ${props => props.rb} solid ${tinyGray};
  border-bottom: ${props => props.bb} solid ${tinyGray};
`;

const Flex = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const InfoCell = ({ children, rb = '0', bb = '0' }: IInfoCell) => {
  return (
    <Wrapper rb={rb} bb={bb}>
      <Flex>{children}</Flex>
    </Wrapper>
  );
};

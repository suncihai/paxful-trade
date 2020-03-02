import styled from 'styled-components';
import * as React from 'react';
import { Text } from '../common/Text';
import { Avatar } from '../common/Avatar';
import { tinyGray, lightBlue } from '../theme';
import avatar_user from '../imgs/avatar_user.png';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

interface IChatCell {
  children: any;
  isUser: boolean;
  isBuyer: boolean;
  time: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  padding: 15px;
`;

const Flex = styled.div`
  display: flex;
`;

const Align = styled.div`
  text-align: ${props => (props.isUser ? 'right' : 'left')};
`;

const TextBg = styled.div`
  padding: 12px;
  border-radius: 4px;
  background: ${props => (props.isUser ? lightBlue : 'white')};
  margin-bottom: 5px;
`;

const TextGroup = styled.div`
  margin-left: ${props => (props.isUser ? 0 : '15px')};
  margin-right: ${props => (props.isUser ? '15px' : 0)};
  order: ${props => (props.isUser ? -1 : 1)};
`;

export const ChatCell = ({ children, isUser, isBuyer, time }: IChatCell) => {
  return (
    <Wrapper isUser={isUser}>
      <Flex>
        <TextGroup isUser={isUser}>
          <TextBg isUser={isUser}>
            <Text type={isUser ? 'white-text' : 'text'} maxwidth="400px">
              {children}
            </Text>
          </TextBg>
          <Align isUser={isUser}>
            <Text type="sub-text">{time}</Text>
          </Align>
        </TextGroup>
        <Avatar
          src={isUser ? avatar_user : isBuyer ? avatar_seller : avatar_buyer}
        />
      </Flex>
    </Wrapper>
  );
};

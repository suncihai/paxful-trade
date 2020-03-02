import styled from 'styled-components';
import * as React from 'react';
import _ from 'lodash';

interface IAvatar {
  src: any;
  mr?: string;
  mb?: string;
}

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
`;

export const Avatar = ({ src, mr, mb }: IAvatar) => {
  return <Img mb={mb} mr={mr} src={src} />;
};

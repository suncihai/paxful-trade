import React from 'react';
import styled from 'styled-components';
import SubNavBar from '../components/SubNavBar';
import TradeList from '../components/TradeList';
import TradeChat from '../components/TradeChat';
import TradeInfo from '../components/TradeInfo';

const Wrapper = styled.div`
  width: 100%;
  height: 87vh;
`;
const Row = styled.div`
  display: flex;
  height: 100%;
`;

const Trade = () => (
  <Wrapper>
    <SubNavBar />
    <Row>
      <TradeList />
      <TradeChat />
      <TradeInfo />
    </Row>
  </Wrapper>
);

export default Trade;

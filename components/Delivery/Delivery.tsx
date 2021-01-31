import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { CircleWaves, DeliveryText } from "./";

const Wrapper = styled.div`
  background-color: #1063ff;
  min-height: 400px;
  padding: 48px 0;
  overflow: hidden;
  color: #fff;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 100%;

    @media (min-width: 1021px) {
      & > div:first-child {
        margin-right: 15vw;
      }
    }

    @media (max-width: 1020px) {
      flex-direction: column-reverse;

      & > .content {
        margin-bottom: 48px;
      }
    }
  }
`;

interface DeliveryProps {}

export const Delivery: React.FC<DeliveryProps> = () => (
  <Element name="delivery">
    <Wrapper>
      <div data-fix-width>
        <CircleWaves />
        <DeliveryText />
      </div>
    </Wrapper>
  </Element>
);

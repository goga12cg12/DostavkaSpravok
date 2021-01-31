import * as React from "react";
import styled from "styled-components";

import { WhyUsCard } from "./";

const Wrapper = styled.div`
  margin: 24px 0;
  overflow: auto;

  & > div {
    margin: auto;
    padding: 24px 4vw;
    display: grid;
    grid-auto-flow: column;
    gap: min(24px, 2vw);
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
`;

interface CardsProps {}

export const Cards: React.FC<CardsProps> = () => (
  <Wrapper>
    <div>
      <WhyUsCard src="images/icons/Stack.svg" alt="Flag">
        <div>16 000</div>справок
        <br />
        выдано
      </WhyUsCard>
      <WhyUsCard src="images/icons/Smile.svg" alt="Flag">
        <div>8 000</div>довольных клиентов
      </WhyUsCard>
      <WhyUsCard src="images/icons/Star.svg" alt="Flag">
        <div>16</div>специалистов
        <br />в команде
      </WhyUsCard>
      <WhyUsCard src="images/icons/Flag.svg" alt="Flag">
        <div>4</div>года на
        <br />
        рынке
      </WhyUsCard>
    </div>
  </Wrapper>
);

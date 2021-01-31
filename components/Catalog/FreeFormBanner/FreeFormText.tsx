import * as React from "react";
import styled from "styled-components";

import { Button } from "components";

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 20px;
    width: 140px;
  }
  & > *:not(:last-child) {
    margin-right: 20px;
  }

  & > .text-button {
    &:hover {
      color: white;
    }
  }
  & > .call-button {
    background: none;
    border: 1px solid #263238;
    color: #263238;
    text-decoration: none !important;
  }
`;

const Wrapper = styled.div`
  z-index: 1;

  & > h2 {
    margin-bottom: 24px;
    color: #101010;
  }

  & > p {
    max-width: 430px;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 24px;
    margin-bottom: 32px;
    color: #263238;
  }
`;

interface FreeFormTextProps {}

export const FreeFormText: React.FC<FreeFormTextProps> = () => (
  <Wrapper className="content">
    <h2>Закажите нужную справку в свободной форме</h2>
    <p>
      Мы поможем подобрать формат справки и печатей. Просто обратитесь в нашу
      поддержку.
    </p>
    <Actions>
      <Button
        className="text-button"
        as="a"
        href="https://t.me/doktor_prosto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Написать
      </Button>
      <Button className="call-button" as="a" href="tel:+380505595431">
        Позвонить
      </Button>
    </Actions>
  </Wrapper>
);

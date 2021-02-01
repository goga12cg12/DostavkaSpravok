import * as React from "react";
import styled from "styled-components";

import { Button } from "components";
import { openModal } from "scripts";

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;
  flex-wrap: wrap;

  & > * {
    background-color: #000;
    margin-bottom: clamp(12px, 3.5vw, 20px);
    width: 220px;
  }
  & > *:not(:last-child) {
    margin-right: clamp(12px, 3.5vw, 20px);
  }
  @media (max-width: 640px) {
    & > * {
      max-width: calc((100% - 3.5vw) / 2);
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    & > * {
      max-width: 100%;
      margin-right: 0 !important;
      width: 100%;
    }
  }

  & > a {
    background: none;
    border: 1px solid #ffffff;
    color: #ffffff;
    text-decoration: none !important;
  }
`;

const Wrapper = styled.div`
  z-index: 1;

  & a {
    text-decoration: underline;
  }

  & > h2 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 40px;

    & > span.highlight {
      background-color: #ee0000;
      border-radius: 8px;
      display: block;
      padding: 0px 12px 4px;
      transform: rotate(-2deg);
      line-height: 1em;
      margin-left: 0.2em;
      white-space: nowrap;
    }

    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: baseline;

      & span {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }

  & > p {
    max-width: 600px;
    font-size: 20px;
    line-height: 1.4;
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

interface DeliveryTextProps {}

export const DeliveryText: React.FC<DeliveryTextProps> = () => (
  <Wrapper className="content">
    <h2>
      Доставка <span className="highlight">по всей Украине</span>{" "}
      <span role="img" aria-label="Rocket emoji">
        🚀
      </span>
    </h2>
    <p>
      Выберите любое удобное отделение{" "}
      <a
        href="https://novaposhta.ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Новой Почты
      </a>{" "}
      и мы отправим ваш заказ наложенным платежом в ближайшее время. Никаких
      уловок! Оплата при получении.
    </p>
    <p>
      Есть вопросы по доставке?{" "}
      <a
        href="https://t.me/dostavkaspravok"
        target="_blank"
        rel="noopener noreferrer"
      >
        Мы рады помочь!
      </a>{" "}
      <span role="img" aria-label="Twinkle face">
        😉
      </span>
    </p>
    <Actions>
      <Button onClick={openModal}>Заказать доставку</Button>
      <Button
        as="a"
        href="https://novaposhta.ua/ru/office/list"
        target="_blank"
        rel="noopener noreferrer"
      >
        Отделения
      </Button>
    </Actions>
  </Wrapper>
);

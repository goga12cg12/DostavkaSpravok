import * as React from "react";
import styled from "styled-components";

import { Element } from "react-scroll";

import { Cards } from "./";

const Wrapper = styled.div`
  padding: 64px 0 76px;

  & > h3 {
    margin-bottom: 24px;
    font-size: 32px;
    text-align: center;
  }
  & > div.text-block > p {
    max-width: 480px;
    margin: 48px auto 0;
    font-size: 20px;
    line-height: 1.5;
  }
`;
interface WhyUsProps {}

export const WhyUs: React.FC<WhyUsProps> = () => (
  <Element name="about" data-dotted>
    <Wrapper>
      <h3>Почему нам стоит доверять?</h3>
      <Cards />
      <div data-fix-width className="text-block">
        <p>
          Мы занимаемся выдачей и доставкой больничных листов, справок и
          документов по всей Украине. Получите справки в школу и на работу, не
          тратя время на походы в поликлиники и сидение в очередях. Наш сервис
          делает сбор нужных документов лёгким и быстрым. Получите личного врача
          у себя телефоне.
        </p>
      </div>
    </Wrapper>
  </Element>
);

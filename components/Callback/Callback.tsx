import * as React from "react";
import styled from "styled-components";

import { BubblesBackground } from "components";
import { CallbackForm } from "./";

const Wrapper = styled.div`
  position: relative;
  min-height: 400px;
  padding: 64px 0;

  & > div.content {
    z-index: 1;
    & * {
      z-index: 1;
    }

    & .block {
      display: block;
      max-width: 400px;
      text-align: left;
      margin: 0 auto 48px;
      position: relative;

      & > h3 {
        margin-bottom: 20px;
      }

      & > p {
        line-height: 1.5;
      }
    }
  }
`;
interface CallbackProps {}

export const Callback: React.FC<CallbackProps> = () => {
  return (
    <Wrapper>
      <BubblesBackground />
      <div className="content">
        <div data-fix-width>
          <span className="block">
            <h3>Не нашли то, что нужно?</h3>
            <p>
              Не расстраивайтесь! Оставьте свой телефон и наши специалисты с
              радостью помогут вам подобрать и оформить нужную справку.
            </p>
          </span>
          <CallbackForm />
        </div>
      </div>
    </Wrapper>
  );
};

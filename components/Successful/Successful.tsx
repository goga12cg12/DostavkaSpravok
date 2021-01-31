import * as React from "react";
import styled from "styled-components";

import { Button } from "components";
import { SuccessfulModalBase, useSuccessful } from "./";

interface SuccessfulProps {}

export const Successful: React.FC<SuccessfulProps> = () => {
  const { setOpen } = useSuccessful();

  return (
    <SuccessfulModalBase>
      <Wrapper>
        <img src="images/Successful.svg" alt="Successful check" />
        <h5>Заявка успешно принята!</h5>
        <p>Наш оператор свяжется с вами в ближайшее время.</p>
        <Button onClick={() => setOpen(false)}>Замечательно</Button>
      </Wrapper>
    </SuccessfulModalBase>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px 24px 48px;

  & > img {
    display: block;
    max-width: 320px;
    width: 100%;
    height: auto;
  }

  & > h5 {
    font-size: 24px;
    margin-top: 32px;
  }
  & > p {
    font-size: 18px;
    max-width: 360px;
    margin-top: 20px;
    margin-bottom: 32px;
    line-height: 1.5;
  }
  & > button {
    width: 100%;
    max-width: 240px;
  }
`;

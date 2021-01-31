import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid var(--color-cool-gray-3);
  border-bottom: 1px solid var(--color-cool-gray-3);

  padding: 18px 4px;
  & > div {
    font-size: 16px;
    line-height: 26px;

    & > span {
      font-size: 24px;
    }
  }
`;

interface PriceProps {
  price?: number;
}

export const Price: React.FC<PriceProps> = ({ price, children }) => (
  <Wrapper data-wide>
    <div>
      Стоимость:
      <br />
      {price && <span>₴ {price}</span>}
      {children}
    </div>
  </Wrapper>
);

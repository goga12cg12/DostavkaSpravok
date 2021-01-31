import * as React from "react";
import styled from "styled-components";

import { FreeFormImage, FreeFormText } from "./";

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: #ffedab;

  min-height: 400px;
  padding: 48px 0;
  overflow: hidden;
  position: relative;

  & div.cardContent {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 100%;
    z-index: 1;

    @media (max-width: 1020px) {
      flex-direction: column-reverse;

      & > .content {
        margin-bottom: 24px;
      }
    }
  }
`;

interface FreeFormBannerProps {}

export const FreeFormBanner: React.FC<FreeFormBannerProps> = () => (
  <Wrapper>
    <div data-fix-width className="cardContent">
      <FreeFormImage />
      <FreeFormText />
    </div>
  </Wrapper>
);

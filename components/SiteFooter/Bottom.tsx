import * as React from "react";
import styled from "styled-components";

import { FooterLink } from "components/SiteFooter";

const Wrapper = styled.div`
  align-items: center;
  display: grid;

  margin-top: 80px;

  color: var(--color-text-secondary);

  & > .links {
    & a {
      align-items: center;
      display: flex;
      justify-content: left;

      & img {
        width: 24px;
        height: 24px;
        margin-right: 12px;
      }
    }
  }

  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
  @media (max-width: 1019px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 48px;

    & > .links {
      grid-row-start: 1;
      margin-bottom: 20px;
    }
  }
`;
interface BottomProps {}

export const Bottom: React.FC<BottomProps> = () => {
  const date = new Date();

  return (
    <Wrapper className="bottom" data-font-size="Focus">
      <div>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a href="http://snelsi.com/" target="_blank" rel="noopener noreferrer">
          Snelsi
        </a>{" "}
        © {date.getFullYear()}
      </div>
      <ul className="links">
        <FooterLink href="https://t.me/dostavkaspravok">
          <img src="images/icons/telegram.svg" alt="telegram icon" />
          Мы в Telegram
        </FooterLink>
      </ul>
    </Wrapper>
  );
};

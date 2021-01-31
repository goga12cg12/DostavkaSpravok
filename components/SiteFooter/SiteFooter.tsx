import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Bottom, ExploreLinks, SocialLinks } from "components/SiteFooter";

interface SiteFooterProps {}

export const SiteFooter: React.FC<SiteFooterProps> = () => (
  <Element name="contacts">
    <FooterBase>
      <div data-fix-width>
        <div className="top">
          <div className="about">
            <h2 data-font-size="XL">DostavkaSpravok</h2>
            <p data-font-size="Focus">
              Оформление больничных листов, медицинских книжек и других справок
              официально, с доставкой Новой Почтой по всей Украине.
            </p>
          </div>
          <div className="blocks">
            <ExploreLinks />
            <SocialLinks />
          </div>
        </div>
        <Bottom />
      </div>
    </FooterBase>
  </Element>
);

const FooterBase = styled.footer`
  --color-text-secondary: #a9a9a9;
  --color-text-secondary-hover: #fff;

  background-color: var(--color-gray-10);
  color: white;

  overflow: auto;

  padding: 3em 0 2em;

  & ul {
    list-style: none;
  }

  & div.top {
    display: grid;
    gap: 48px;

    & > .about {
      & > p {
        color: var(--color-text-secondary);
        margin-top: 32px;
        margin-right: 1em;
        max-width: 360px;
        line-height: 1.5;
      }
    }

    @media (min-width: 1020px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1019px) {
      grid-template-columns: 1fr;
    }
  }

  & div.blocks {
    flex-direction: column;

    & > div {
      @media (min-width: 520px) {
        min-width: 100px;
      }
      &:not(:last-child) {
        margin-right: 48px;
        margin-bottom: 48px;
      }
    }
  }
`;

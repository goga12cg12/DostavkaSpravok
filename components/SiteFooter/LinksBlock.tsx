import * as React from "react";
import styled from "styled-components";

const Block = styled.div`
  & > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 20px;

    & li:not(:last-child) {
      margin-right: 20px;
    }

    & a {
      display: block;
      margin: 0.2em 0;
      line-height: 1.5;
    }
  }
`;

interface LinksBlockProps {
  title: string;
}

export const LinksBlock: React.FC<LinksBlockProps> = ({ title, children }) => (
  <Block>
    <h6>{title}</h6>
    <ul data-font-size="Focus">{children}</ul>
  </Block>
);

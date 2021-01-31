import * as React from "react";
import NextLink from "next/link";

import styled from "styled-components";
import { Nav } from "./";

const Head = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .title {
    font-size: 24px;
    font-weight: 600;
  }
`;

interface HeaderProps {}

export const SiteHeader: React.FC<HeaderProps> = () => (
  <Head data-fix-width>
    <div className="title">
      <NextLink href="/">
        <a href="/">DostavkaSpravok</a>
      </NextLink>
    </div>
    <Nav />
  </Head>
);

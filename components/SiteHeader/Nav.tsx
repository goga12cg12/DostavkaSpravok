import * as React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
import { Menu } from "./";

const Wrapper = styled.nav`
  display: flex;
  & > .links {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 18px;
    font-weight: 400;

    & a {
      cursor: pointer;
    }

    & > li:not(:last-child) {
      margin-right: 40px;
    }
  }

  & button {
    display: none;
  }

  @media (max-width: 800px) {
    & > .links {
      display: none;
    }
    & button {
      display: flex;
    }
  }
`;

interface NavProps {}

export const Nav: React.FC<NavProps> = () => (
  <Wrapper>
    <ul className="links">
      <li>
        <Link to="catalog" smooth={true}>
          Услуги
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true}>
          О нас
        </Link>
      </li>
      <li>
        <Link to="delivery" smooth={true}>
          Доставка
        </Link>
      </li>
      <li>
        <Link to="contacts" smooth={true}>
          Контакты
        </Link>
      </li>
    </ul>
    <Menu />
  </Wrapper>
);

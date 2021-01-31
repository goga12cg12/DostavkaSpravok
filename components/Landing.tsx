import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

import { Button } from "components";
import { openModal } from "scripts";

import { Link } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1020px) {
    flex-direction: column;

    & > .content {
      margin-top: 24px;
      text-align: center;

      & .actions {
        justify-content: center;
      }
    }
  }

  @media (max-width: 640px) {
    & > .content {
      text-align: left;

      & .actions {
        justify-content: left;
      }
    }
  }

  & > .content {
    margin: 2em 0;
    & > h1 {
      max-width: 800px;
      padding-right: 20px;
      margin-bottom: 0.5em;
      font-size: clamp(36px, 6vw, 72px);

      @media (max-width: 1440px) {
        padding-right: 0;
      }
    }
    & > p {
      color: #7c7c7c;
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 40px;
      max-width: 460px;
      padding-right: 20px;
      line-height: 1.5;
    }

    & > .actions {
      display: flex;
      align-items: center;

      & > button:not(:last-child) {
        margin-right: 20px;
      }

      & .secondary-button {
        background: none;
        border: 1px solid #3056de;
        color: #3056de;
      }

      @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        & > button {
          width: 100%;
        }
      }
    }
  }

  & .illustration {
    height: auto;
    max-width: 500px;
    & > img {
      object-fit: contain;
      width: 100%;
    }
  }
`;

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => (
  <Wrapper data-fix-width>
    <div className="content">
      <h1>Доставка любой справки в один клик</h1>
      <p>
        Оформление больничных листов, медицинских книжек и других справок
        официально, с доставкой, в течении дня.
      </p>
      <div className="actions">
        <Button className="primary-button" onClick={openModal}>
          Сделать заказ
        </Button>
        <Link to="about" smooth={true}>
          <Button className="secondary-button">О нас</Button>
        </Link>
      </div>
    </div>
    <div className="illustration">
      <Image
        src="/images/Rocket.png"
        alt="Doctor illustration"
        width={1000}
        height={1000}
      />
    </div>
  </Wrapper>
);

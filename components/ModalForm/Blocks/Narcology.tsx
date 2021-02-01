import * as React from "react";
import styled from "styled-components";
import { Address, Profession } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";
import RedeemIcon from "@material-ui/icons/Redeem";

const Bonus = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  background-color: rgb(192 245 218);
  color: #0d150e;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 500;
  margin: 0 -3px;

  & .prompt-icon {
    align-items: center;
    background-color: rgb(163 212 188);
    border-radius: 50%;
    color: #2a422d;
    display: inline-flex;
    justify-content: center;
    margin-right: 12px;
    min-width: 32px;
    width: 32px;
    height: 32px;
    & svg {
      height: 20px;
      width: 20px;
    }
  }
  & .propmpt-text {
    width: fill-available;
    @media (min-width: 640px) {
      white-space: nowrap;
    }
  }
`;

interface NarcologyProps {}

export const Narcology: React.FC<NarcologyProps> = () => (
  <>
    <Address title="Адрес Прописки" />
    <Profession />

    <Price price={300} />
    <Bonus data-wide>
      <div className="prompt-icon">
        <RedeemIcon />
      </div>
      <div className="prompt-text">
        Плюс скидка <span>₴ 100</span> на справку от психиатра 👻
      </div>
    </Bonus>
    <hr />
  </>
);

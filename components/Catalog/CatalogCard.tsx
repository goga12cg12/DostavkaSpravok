import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { usePrefferedTypeContext } from "components/ModalForm/PrefferedTypeContext";
import { openModal } from "scripts";
import { FormType } from "interfaces/Form";

const Wrapper = styled.button`
  background-color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #222;

  display: block;
  font-size: 24px;
  font-weight: 600;

  min-height: 340px;
  transition: var(--transition-ease);
  text-align: left;
  padding: 20px;

  height: 100%;
  width: 100%;
  overflow: hidden;

  & > div.image-wrapper {
    margin-bottom: 20px;
    & > div {
      height: 0;
      padding-top: 65%;
      position: relative;

      img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        object-fit: contain;
      }
    }
  }
  & > .card-header {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  & > .card-footer {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;

    display: flex;
    align-items: center;

    & svg {
      color: inherit;
      height: 22px;
      width: 22px;
      margin-left: 8px;
      transition: var(--transition-ease);
    }
  }
  &:hover {
    transform: translateY(-2%);
  }
`;

interface CatalogCardProps {
  title: any;
  footer: any;
  src: string;
  alt: string;
  type: FormType;
}

export const CatalogCard: React.FC<CatalogCardProps> = ({
  title,
  src,
  alt,
  footer,
  type,
}) => {
  const { setPrefferedType } = usePrefferedTypeContext();
  return (
    <Wrapper
      onClick={() => {
        setPrefferedType(type);
        openModal();
      }}
    >
      <div className="image-wrapper">
        <div>
          <Image src={src} alt={alt} width={306} height={200} />
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="card-header">{title}</div>
      <div className="card-footer">
        {footer}
        <ArrowForwardIcon />
      </div>
    </Wrapper>
  );
};

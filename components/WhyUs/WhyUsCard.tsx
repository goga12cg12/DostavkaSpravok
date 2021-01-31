import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f2f4f8;
  border-radius: 8px;
  cursor: pointer;
  height: 200px;
  padding: 24px;
  width: 200px;
  position: relative;

  color: #000;
  font-size: 20px;

  transition: var(--transition-ease);

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  & div {
    color: #5f52fa;
    font-size: 40px;
    line-height: 1.25;
  }

  & > img {
    position: absolute;
    left: 24px;
    bottom: 24px;
    display: block;
    height: 32px;
    width: 32px;
  }
`;

interface WhyUsCardProps {
  src: string;
  alt: string;
}

export const WhyUsCard: React.FC<WhyUsCardProps> = ({ src, alt, children }) => {
  return (
    <Wrapper>
      {children}

      <img src={src} alt={alt} />
    </Wrapper>
  );
};

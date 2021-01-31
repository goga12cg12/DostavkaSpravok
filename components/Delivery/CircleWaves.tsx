import * as React from "react";
import styled, { keyframes } from "styled-components";

const wavesCount = 5;
const duration = 16;

const GrowFade = keyframes`
from {
    opacity: 0.25;
    transform: scale(1);
}

to {
    opacity: 0;
    transform: scale(3);
}`;

interface CircleProps {
  delay: number;
}
const Cirlce = styled.span<CircleProps>`
  animation: ${GrowFade} ${duration}s linear infinite;
  animation-fill-mode: both;
  animation-delay: ${({ delay = 0 }) => delay}s;
  background: #fff;
  border-radius: 50%;
  display: block;

  height: 160px;
  width: 160px;
  z-index: 0;

  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
`;

interface CircleWavesProps {}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    z-index: 1;
    cursor: pointer;
    width: 240px;
    transition: var(--transition-ease);

    &:hover {
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const CircleWaves: React.FC<CircleWavesProps> = () => {
  const waves = React.useMemo(() => new Array(wavesCount).fill(0), [
    wavesCount,
  ]);

  return (
    <Wrapper>
      {waves.map((_, i) => (
        <Cirlce key={i} delay={-duration / 2 + (duration / wavesCount) * i} />
      ))}
      <img src="images/Box.svg" alt="Nova Poshta Delivery Box" />
    </Wrapper>
  );
};

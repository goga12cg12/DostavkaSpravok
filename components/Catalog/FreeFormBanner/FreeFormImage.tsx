import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: block;
  width: fill-available;
  max-width: 500px;

  & img {
    min-height: 240px;
    object-fit: cover;
  }
`;

interface FreeFormImageProps {}

export const FreeFormImage: React.FC<FreeFormImageProps> = () => (
  <Wrapper>
    <Image src="/images/Team.svg" alt="" width={500} height={300} />
  </Wrapper>
);

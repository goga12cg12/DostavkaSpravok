import * as React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";

const StyledLink = styled.a`
  color: var(--color-text-secondary);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-secondary-hover);
  }
`;

interface FooterLinkProps {
  href: string;
  inner?: boolean;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  inner = false,
  children,
}) => {
  if (inner) {
    return (
      <li>
        <Link to={href} smooth={true}>
          <StyledLink as="span">{children}</StyledLink>
        </Link>
      </li>
    );
  }
  return (
    <li>
      <StyledLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledLink>
    </li>
  );
};

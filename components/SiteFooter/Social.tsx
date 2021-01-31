import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface SocialLinksProps {}

export const SocialLinks: React.FC<SocialLinksProps> = () => (
  <LinksBlock title="Контакты">
    <FooterLink href="tel:+380505595431">+380 (50) 559 54 31</FooterLink>
  </LinksBlock>
);

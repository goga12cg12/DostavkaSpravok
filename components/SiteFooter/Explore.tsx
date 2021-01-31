import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface OtherLinksProps {}

export const ExploreLinks: React.FC<OtherLinksProps> = () => (
  <LinksBlock title="Навигация">
    <FooterLink href="catalog" inner>
      Услуги
    </FooterLink>
    <FooterLink href="about" inner>
      О нас
    </FooterLink>
    <FooterLink href="delivery" inner>
      Доставка
    </FooterLink>
  </LinksBlock>
);

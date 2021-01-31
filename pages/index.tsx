import * as React from "react";
import {
  SiteHeader,
  Landing,
  Delivery,
  SiteFooter,
  ScrollToTopButton,
  ModalForm,
} from "components";

import { WithDetailsValidation } from "components/ModalForm/Inputs/DetailsValidationContext";
import { WithFormValidation } from "components/ModalForm/FormValidationContext";
import { PrefferedTypeContext } from "components/ModalForm/PrefferedTypeContext";
import { SuccessfulContextProvider, Successful } from "components/Successful";

import { Catalog } from "components/Catalog";
import { WhyUs } from "components/WhyUs";
import { Callback } from "components/Callback";

export const Home: React.FC = () => (
  <PrefferedTypeContext>
    <SuccessfulContextProvider>
      <main>
        <div data-dotted>
          <SiteHeader /> <Landing />
        </div>

        <Catalog />
        <WhyUs />
        <Delivery />
        <Callback />
      </main>
      <SiteFooter />
      <ScrollToTopButton />
      <WithDetailsValidation>
        <WithFormValidation>
          <ModalForm />
        </WithFormValidation>
      </WithDetailsValidation>
      <Successful />
    </SuccessfulContextProvider>
  </PrefferedTypeContext>
);

export default Home;

import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { CatalogCard, FreeFormBanner } from "components/Catalog";

const Wrapper = styled.div`
  background-color: #fafafa;

  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  padding: 48px 0;

  & > div > h2 {
    margin-bottom: 1em;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: clamp(12px, 4vw, 20px);
  margin: 20px 0;

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

interface CatalogProps {}

export const Catalog: React.FC<CatalogProps> = () => {
  return (
    <Element name="catalog">
      <Wrapper>
        <div data-fix-width>
          <h2>Услуги</h2>
          <Grid>
            <li>
              <CatalogCard
                title="Больничный лист"
                footer="От 350 ₴"
                src="/images/cards/Temperatura.svg"
                alt=""
                type="Больничный"
              />
            </li>
            <li>
              <CatalogCard
                title="Медкнижка / Санитарная книжка"
                footer="200 ₴"
                src="/images/cards/Treasure.svg"
                alt=""
                type="Медкнижка"
              />
            </li>
            <li>
              <CatalogCard
                title="Справка в бассейн"
                footer="150 ₴"
                src="/images/cards/Pool.svg"
                alt=""
                type="Справка в бассейн"
              />
            </li>
            <li>
              <CatalogCard
                title="Справка о беременности"
                footer="300 ₴"
                src="/images/cards/Searching.svg"
                alt=""
                type="Справка о беременности"
              />
            </li>
            <li>
              <CatalogCard
                title="Флюрография"
                footer="100 ₴"
                src="/images/cards/Music.svg"
                alt=""
                type="Флюрография"
              />
            </li>
            <li>
              <CatalogCard
                title="Справка для студентов"
                footer="150 ₴"
                src="/images/cards/Learning.svg"
                alt=""
                type="Освобождение по физкультуре (Форма 095/о)"
              />
            </li>
            <li>
              <CatalogCard
                title={
                  <>
                    <span>Абитуриентам</span>{" "}
                    <span style={{ whiteSpace: "nowrap" }}>(Форма 086/о)</span>
                  </>
                }
                footer="200 ₴"
                src="/images/cards/Job.svg"
                alt=""
                type="Для поступающих в ВУЗ (Форма 086/о)"
              />
            </li>
            <li>
              <CatalogCard
                title="Медицинский осмотр"
                footer="200 ₴"
                src="/images/cards/Rating.svg"
                alt=""
                type="Профосмотр"
              />
            </li>
            <li>
              <CatalogCard
                title="Справка для водителей"
                footer="350 ₴"
                src="/images/cards/Hipster.svg"
                alt=""
                type="Справка для водителей (Форма 083/о)"
              />
            </li>
            <li>
              <CatalogCard
                title="Сертификат Психиатра"
                footer="300 ₴"
                src="/images/cards/Presentation.svg"
                alt=""
                type="Сертификат Психиатра"
              />
            </li>
            <li>
              <CatalogCard
                title="Сертификат Нарколога"
                footer="300 ₴"
                src="/images/cards/Meeting.svg"
                alt=""
                type="Сертификат Нарколога"
              />
            </li>
          </Grid>
          <FreeFormBanner />
        </div>
      </Wrapper>
    </Element>
  );
};

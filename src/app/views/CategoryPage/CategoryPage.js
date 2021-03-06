import React from 'react';

import { Container } from './CategoryPage.style';
import ProductCardListing from 'app/components/ProductCardListing/ProductCardListing';
import withExtractingMockData from 'app/hocs/withExtractingMockData';

function CategoryPage ({ data }) {
  return <Container className="container pt-4 pt-lg-5 pb-4 pb-lg-5">
    <ProductCardListing data={ data } />
  </Container>;
}

export default withExtractingMockData(
  CategoryPage,
  '/category-product-list.json',
  'categorySlug',
  'mainInfo.dataLayer.page.filters[0].filterCheckedValues',
  'mods.listItems'
);
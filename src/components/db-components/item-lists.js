import React from 'react';
import ItemList from '../item-list/item-list';

import {
  withData,
  withDBApiService,
  withChildFunction,
  compose } from '../hoc-helpers/index';

const renderName = ({ name }) => <span>{name}</span>;
// const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapCountryMethodsToProps = DBApiService => {
  return {
    getCountriesByRegion: DBApiService.getCountriesByRegion
  };
};

const ListCountries = compose(
                     withDBApiService(mapCountryMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

export { ListCountries };

import React from 'react';
import List from '../list/list';
import {
  withData,
  withDBApiService,
  withChildFunction,
  compose } from '../hoc-helpers/index';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = DBApiService => {
  return {
    getData: DBApiService.getCountriesByRegion
  };
};

const mapPlanetMethodsToProps = SWApiService => {
  return {
    getData: SWApiService.getAllPlanets
  };
};

const mapStarShipMethodsToProps = SWApiService => {
  return {
    getData: SWApiService.getAllStarShips
  };
};

const PersonList = compose(
                     withSWApiService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const PlanetList = compose(
                     withSWApiService(mapPlanetMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

const StarShipList = compose(
                       withSWApiService(mapStarShipMethodsToProps),
                       withData,
                       withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarShipList
};

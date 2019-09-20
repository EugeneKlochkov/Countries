import React from 'react';
import { withRouter } from 'react-router-dom';
import { Countries, ListCountries } from '../db-components';
import Row from '../row/row';

const ListCountriesByRegion = ({ history, match }) => {

  const { region } = match.params;

  return (
    <Row
      left={<ListCountries onItemSelected={(region) => history.push(region)} />}
      right={<Countries region={region} />} />
  );
};

export default withRouter(ListCountriesByRegion);

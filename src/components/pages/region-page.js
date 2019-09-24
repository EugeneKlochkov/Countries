import React from 'react';
import { withRouter } from 'react-router-dom';
import { Country, ListCountries } from '../db-components';
import Row from '../row/row';

const RegionPage = ({ history, match }) => {

  const { code } = match.params;

  return (
    <Row
      left={<ListCountries onItemSelected={(code) => history.push(code)} />}
      right={<Country code={code} />} />
  );
};

export default withRouter(RegionPage);

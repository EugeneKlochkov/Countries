import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withDBApiService } from '../hoc-helpers';

const Countries = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="name" label="Country" />
      <Record field="capital" label="Capital" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (DBApiService) => {
  return {
      getCountriesByRegion: DBApiService.getCountriesByRegion
  }
};

export default withDBApiService(mapMethodsToProps)(Countries);

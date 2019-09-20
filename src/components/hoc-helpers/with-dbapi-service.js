import React from 'react';
import { DBApiServiceConsumer } from '../dbapi-service-context/dbapi-service-context';

const withDBApiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <DBApiServiceConsumer>
        {
          (DBApiService) => {
            const serviceProps = mapMethodsToProps(DBApiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </DBApiServiceConsumer>
    );
  }
};

export default withDBApiService;

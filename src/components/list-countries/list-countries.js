import React from 'react';
import PropTypes from 'prop-types';
import { withData } from '../hoc-helpers';
import DBApiService from '../../services/dbapi-service';
import './list.css';
const List = props => {
    const {data, onItemSelected, children: renderLabel} = props;
    const items = data.map((item) => {
        const {code} = item,
            label = renderLabel(item);
        return (
            <li className="list-group-item" key={code}
            onClick={() => onItemSelected(code)}>
                {label}
            </li>
        );
    });
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
};

List.defaultProps = {
    onItemSelected: () => {}
};

List.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

const { getAllPeople } = new DBApiService();

export default withData(List, getAllPeople);

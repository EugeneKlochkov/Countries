import React, { Component } from 'react';
import './item-details.css';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
        </li>
    );
};
export {Record};

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null
    };
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.region !== prevProps.region ||
            this.props.getCountriesByRegion !== prevProps.getCountriesByRegion ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const {region, getCountriesByRegion, getImageUrl} = this.props;
        if (!region) return;

        getCountriesByRegion(region)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {

        const { item, image } = this.state;
        if (!item) {
            return <span>Select a item from a list</span>;
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child => { // Перебор дочерних элементов
                                return React.cloneElement(child, {item}) // Клонироваие child с добавлением дополнительного св-ва,
                                // которое мы не можем передать в вызове компонента, т.к. item получаем только в компоненте ItemDetails
                            })
                        }
                    </ul>
                </div>
            </div>
    )
  }
}

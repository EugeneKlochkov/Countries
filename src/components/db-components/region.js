import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Accordion, Button, Card} from "react-bootstrap";
import DBApiService from "../../services/dbapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

class Region extends Component {

    ApiService = new DBApiService();
    state = {
        region: [],
        loading: true
    };

    componentDidMount() {
        this.updateRegion();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.region !== prevProps.region) {
            this.updateRegion();
        }
    }

    onRegionLoaded = (region) => {
        this.setState({
            region,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updateRegion = () => {
        const { region } = this.props;
        this.ApiService
            .getCountriesByRegion(region)
            .then(this.onRegionLoaded)
            .catch(this.onError);
    };

    render() {
        const { region, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <RegionView region={region}/> : null;
        return (
            <div className="countries">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const RegionView = ({ region }) => {
    return (
        <React.Fragment>
            <Accordion>
                {region.map((el, i) => {
                    return (
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                                    {el.name}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={i}>
                                <Card.Body>
                                    <ul className="country-props">
                                        <li>Capital - {el.capital}</li>
                                        <li>Language - {el.languages[0].name}</li>
                                        <li>Population - {el.population}</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </React.Fragment>
    );
};

export default withRouter(Region);

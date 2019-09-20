import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from "../error-indicator/error-indicator";
import DBApiService from "../../services/dbapi-service";
import './random-country.css'
import Spinner from "../spinner/spinner";


export default class RandomCountry extends Component {
    countries = "AU\n" +
        "AT\n" +
        "AZ\n" +
        "AX\n" +
        "AL\n" +
        "DZ\n" +
        "AS\n" +
        "VI\n" +
        "AI\n" +
        "AO\n" +
        "AD\n" +
        "AQ\n" +
        "AG\n" +
        "AR\n" +
        "AW\n" +
        "AF\n" +
        "BS\n" +
        "BD\n" +
        "BB\n" +
        "BH\n" +
        "BZ\n" +
        "BE\n" +
        "BJ\n" +
        "BM\n" +
        "BY\n" +
        "BG\n" +
        "BO\n" +
        "BA\n" +
        "BW\n" +
        "BR\n" +
        "IO\n" +
        "VG\n" +
        "BN\n" +
        "BF\n" +
        "BI\n" +
        "BT\n" +
        "VU\n" +
        "VA\n" +
        "GB\n" +
        "VE\n" +
        "VN\n" +
        "AM\n" +
        "WF\n" +
        "GA\n" +
        "HT\n" +
        "GY\n" +
        "GM\n" +
        "GH\n" +
        "GP\n" +
        "GT\n" +
        "GN\n" +
        "GW\n" +
        "GG\n" +
        "HN\n" +
        "HK\n" +
        "GD\n" +
        "GR\n" +
        "GE\n" +
        "GU\n" +
        "GI\n" +
        "GL\n" +
        "DK\n" +
        "CD\n" +
        "JE\n" +
        "DJ\n" +
        "DM\n" +
        "DO\n" +
        "UM\n" +
        "EC\n" +
        "GQ\n" +
        "ER\n" +
        "EE\n" +
        "ET\n" +
        "EG\n" +
        "YE\n" +
        "ZM\n" +
        "EH\n" +
        "ZW\n" +
        "IL\n" +
        "IN\n" +
        "ID\n" +
        "IQ\n" +
        "IR\n" +
        "IE\n" +
        "IS\n" +
        "ES\n" +
        "IT\n" +
        "JO\n" +
        "CV\n" +
        "KZ\n" +
        "KY\n" +
        "KH\n" +
        "CM\n" +
        "CA\n" +
        "QA\n" +
        "KE\n" +
        "KG\n" +
        "CN\n" +
        "CY\n" +
        "KI\n" +
        "CC\n" +
        "CO\n" +
        "KM\n" +
        "CG\n" +
        "CR\n" +
        "CI\n" +
        "CU\n" +
        "KW\n" +
        "CW\n" +
        "LA\n" +
        "LV\n" +
        "LS\n" +
        "LT\n" +
        "LR\n" +
        "LB\n" +
        "LY\n" +
        "LI\n" +
        "LU\n" +
        "MU\n" +
        "MR\n" +
        "MG\n" +
        "YT\n" +
        "MO\n" +
        "MW\n" +
        "MY\n" +
        "ML\n" +
        "MV\n" +
        "MT\n" +
        "MA\n" +
        "MQ\n" +
        "MH\n" +
        "MX\n" +
        "MZ\n" +
        "MD\n" +
        "MC\n" +
        "MN\n" +
        "MS\n" +
        "MM\n" +
        "NA\n" +
        "NR\n" +
        "NP\n" +
        "NE\n" +
        "NG\n" +
        "NL\n" +
        "AN\n" +
        "BQ\n" +
        "NI\n" +
        "DE\n" +
        "NU\n" +
        "NZ\n" +
        "NC\n" +
        "NO\n" +
        "AE\n" +
        "OM\n" +
        "BV\n" +
        "IM\n" +
        "NF\n" +
        "CX\n" +
        "SH\n" +
        "HM\n" +
        "CK\n" +
        "PK\n" +
        "PW\n" +
        "PS\n" +
        "PA\n" +
        "PG\n" +
        "PY\n" +
        "PE\n" +
        "ZA\n" +
        "GS\n" +
        "KR\n" +
        "SS\n" +
        "KP\n" +
        "MK\n" +
        "MP\n" +
        "PN\n" +
        "PL\n" +
        "PT\n" +
        "PR\n" +
        "RE\n" +
        "RU\n" +
        "RW\n" +
        "RO\n" +
        "SV\n" +
        "WS\n" +
        "SM\n" +
        "ST\n" +
        "SA\n" +
        "SZ\n" +
        "SJ\n" +
        "SC\n" +
        "BL\n" +
        "SN\n" +
        "MF\n" +
        "PM\n" +
        "VC\n" +
        "KN\n" +
        "LC\n" +
        "RS\n" +
        "SY\n" +
        "SG\n" +
        "SX\n" +
        "SK\n" +
        "SI\n" +
        "SB\n" +
        "SO\n" +
        "US\n" +
        "SD\n" +
        "SR\n" +
        "TL\n" +
        "SL\n" +
        "TJ\n" +
        "TH\n" +
        "TW\n" +
        "TZ\n" +
        "TC\n" +
        "TG\n" +
        "TK\n" +
        "TO\n" +
        "TT\n" +
        "TV\n" +
        "TN\n" +
        "TR\n" +
        "TM\n" +
        "UG\n" +
        "HU\n" +
        "UZ\n" +
        "UA\n" +
        "UY\n" +
        "FO\n" +
        "FM\n" +
        "FJ\n" +
        "PH\n" +
        "FI\n" +
        "FK\n" +
        "FR\n" +
        "GF\n" +
        "PF\n" +
        "TF\n" +
        "HR\n" +
        "CF\n" +
        "TD\n" +
        "CZ\n" +
        "CL\n" +
        "ME\n" +
        "CH\n" +
        "SE\n" +
        "LK\n" +
        "JM\n" +
        "JP\n";

    /*callingCodes = [93,355,21,684,376,244,1264,1268,374,54,61,43,994,1242,973,880,1246,375,32,501,229,1441,591,387,267,55,1284,673,359,226,257,7,855,237,1,238,1345,236,235,56,86,672,672,57,1670,269,242,682,506,385,53,357,420,45,246,253,1767,1809,62,593,20,503,240,372,251,298,500,679,358,33,590,594,689,241,220,995,49,233,350,30,299,1473,1671,671,502,224,245,592,509,504,852,36,354,91,62,98,964,353,972,39,225,1876,81,962,7,254,686,996,965,856,371,961,266,231,21,41,370,352,853,389,261,265,60,960,223,356,692,596,222,230,1706,1905,52,691,377,976,1664,212,258,95,264,674,977,31,599,687,64,505,227,234,683,672,850,967,670,47,968,92,507,675,595,51,63,48,351,1787,974,378,262,40,7,250,247,508,39,239,966,221,248,232,65,421,386,677,252,27,82,969,34,94,1869,1758,1784,249,597,47,268,46,41,963,992,886,255,66,228,690,676,1868,21,90,993,1649,688,1340,256,380,971,44,598,1,998,678,39,58,84,681,21,685,381,243,260,263];
*/
    static defaultProps = {
        updateInterval: 10000
    };
    static propTypes = {
        updateInterval: PropTypes.number
    };
    ApiService = new DBApiService();
    state = {
        country: {},
        loading: true
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updateCountry();
        this.interval = setInterval(this.updateCountry, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onCountryLoaded = (country) => {
        this.setState({
            country,
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

    updateCountry = () => {
        const arrCountries = this.countries.split('\n');
        const numCode = Math.floor(Math.random()*arrCountries.length);
        const code = arrCountries[numCode].toLowerCase();
        this.ApiService
            .getCountryByCode(code)
            .then(this.onCountryLoaded)
            .catch(this.onError);
    };

    render() {
        const { country, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null; // особенность JSX что null внутри разметки просто игнорируется
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <CountryView country={country}/> : null;
        return (
            <div className="random-country">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const CountryView = ({ country }) => {

    const { name, capital, language, flag, population} = country;

    return (
        <React.Fragment>
            <div>
                <h4>{name}</h4>
                <img src={flag} alt="Country flag"/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Capital - </span>
                        <span>{capital}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Language - </span>
                        <span>{language}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Population - </span>
                        <span>{population}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
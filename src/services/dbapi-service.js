export default class  DBApiService {

    baseUrl = "https://restcountries.eu";

    getAllCountries = async () => {
        const res = await fetch(`${this.baseUrl}rest/v2/all`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this.baseUrl}rest/v2/all` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getResource = async url => {
        const res = await fetch(`${this.baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getCountryByCode = async code => {
        const country = await this.getResource(`/rest/v2/alpha/${code}`);
        return DBApiService._transformCountry(country);
    };
    getCountriesByRegion = async region => {
        const countries = await this.getResource(`/rest/v2/region/${region}`);
        // console.log(countries);
        return countries;
    };

    /*static _extractCode = item => {
        const idRegExp = /([a-z]*)$/;
        return item.url.match(idRegExp)[1];
    };*/

    static _transformCountry = country => {
        return {
            code: country.alpha2Code,
            name: country.name,
            capital: country.capital,
            flag: country.flag,
            language: country.languages[0].name,
            population: country.population
        }
    };
}
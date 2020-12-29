import React, { useState, useEffect } from 'react';
import Selector from '../Selector';
import GetStation from '../../api/rentalStationList';

export default function StationBox() {
    const [originData, setData] = useState({});
    const [branch, setBranch] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetStation();
            setData(data.RentalStationListResponse);
            init(data.RentalStationListResponse);
        };
        fetchData();
    }, []);

    function init(data) {
        let cityList = [];
        data.forEach(function (value) {
            cityList.push(value.CityName);
        });

        let stationList = [];
        data[0].StationInformation.forEach(function (value) {
            stationList.push(value.StationName);
        });

        setBranch({
            ...branch,
            city: 0,
            cityList: cityList,
            station: 0,
            stationList: stationList,
        });
    }

    function initStation(cityIndex = 0) {
        let stationList = [];
        originData[cityIndex].StationInformation.forEach(function (value) {
            stationList.push(value.StationName);
        });
        setBranch({
            ...branch,
            city: cityIndex,
            stationList: stationList,
        });
    }

    /**
     * @param {Array} list
     * @return {Array}
     */
    function getOption(list = []) {
        let items = [];
        list.forEach(function (value, index) {
            items.push(
                <option key={value} value={index}>
                    {value}
                </option>
            );
        });
        return items;
    }

    return (
        <>
            <Selector
                onChange={(event) => {
                    initStation(event.target.value);
                    console.log(event.target.value);
                }}
                value={branch.city}
                text={getOption(branch.cityList)}
            />
            <Selector
                onChange={(event) => {
                    console.log(event);
                }}
                value={branch.station}
                text={getOption(branch.stationList)}
            />
        </>
    );
}

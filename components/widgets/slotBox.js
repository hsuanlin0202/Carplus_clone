import React, { useState, useEffect } from 'react';
import Selector from '../Selector';
import DatePicker from '../DatePicker';

export default function SlotBox() {
    const [getTime, setGetTime] = useState('');

    /**
     * @param {Array} list
     * @return {Array}
     */
    function getOption(start, close) {
        let items = [];
        let list = select_factory(start, close);
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
            <DatePicker />
            <Selector
                onChange={(event) => {
                    setGetTime(event.target.value);
                }}
                value={getTime}
                text={getOption(800, 2000)}
            />
        </>
    );
}

function select_factory(start, close) {
    let string_start = '';

    if (start % 100 == 0) {
        start = start - 70;
    } else {
        start = start - 30;
    }

    let innertext = [];
    while (start < close) {
        if (start % 100 == 0) {
            start += 30;
            if (start < 1000) {
                string_start = '0' + start.toString().substring(0, 1) + ':30';
            } else {
                string_start = start.toString().substring(0, 2) + ':30';
            }
        } else {
            start += 70;
            if (start < 1000) {
                string_start = '0' + start.toString().substring(0, 1) + ':00';
            } else {
                string_start = start.toString().substring(0, 2) + ':00';
            }
        }
        innertext.push(string_start);
    }
    return innertext;
}

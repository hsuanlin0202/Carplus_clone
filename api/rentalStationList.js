import { Response } from '../model/rentalStationList';

function real(request) {
    return fetch('restv2/app/rentalStationList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
    })
        .then((response) => response.json())
        .then((myJson) => {
            log(myJson);

            return myJson;
        });
}

function mock() {
    return Response();
}

export default function RentalStationList() {
    return mock();
    //return real(request);
}

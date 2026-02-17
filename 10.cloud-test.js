import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    // vus: 10,
    // duration: '40s',
    stages: [
        {duration: '1m', target: 15},
        {duration: '2m', target: 20},
        {duration: '3m', target: 25},
        {duration: '4m', target: 30},
        {duration: '30s', target: 0},
    ],
    cloud: {
        projectID: 6716868,
        name: 'DDS-Web_Center-Cloud-Test'
    },
    thresholds: {
        http_req_failed:['rate<0.01'],
        http_req_duration: ['p(90)<2000', 'p(95)<3000', 'p(99)<4000']
    }
};

const base_url = 'https://weather.bangkok.go.th/';

export default function () {
    http.get(base_url);
    sleep(1);
};
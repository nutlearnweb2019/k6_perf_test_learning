import http from 'k6/http';

export const options = {
    vus: 1,
    iterations: 1,
    thresholds: {
        http_req_failed:['rate<0.01'],
        http_req_duration: ['p(90)<2000', 'p(95)<3000', 'p(99)<4000']
    }
};

const base_url = 'https://weather.bangkok.go.th/';

export default function () {
    http.get(base_url);
};
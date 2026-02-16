import http from 'k6/http';

export const options = {
    stages: [
        {duration:  '1m', target: 500},
        {duration:  '5m', target: 700},
        {duration:  '6m', target: 300},
        {duration:  '30s', target: 0}
    ]
};

// export default function () {
//     http.get('https://weather.bankok.go.th');
// };

// export default function () {
//     http.get('https://www.amrasia.com/en/home');
// };

export default function () {
    http.get('https://idpeself.sso.go.th/login/');
}
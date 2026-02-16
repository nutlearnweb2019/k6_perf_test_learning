import http from 'k6/http';

export const options = {
    vus: 100,
    iterations: 100,
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

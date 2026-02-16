import http from 'k6/http';
import {check} from 'k6';

export const options = {
    vus: 100,
    iterations: 100,
};

// export default function () {
//     const response = http.get("https://idpeself.sso.go.th/login/");

//     check(response, {
//         'status code validation': (response) => response.status === 200,
//     });
// }

const url = "https://bmawaterflow.bangkok.go.th/API/Water/LastData";

let headers_api = {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjVlYmFjYTRlLTZkNjUtNDJmZC04MzViLWZlZTJkYzQyZDMzNSIsInN1YiI6IjcyMGQ1NzZmLWQwYmQtNDcyMS1iZjIwLTgzMjlkYjllNDFkZiIsImp0aSI6ImYzNGNiOTAwLWJmYTAtNGI2Yy04M2Q5LTJmMTJlNTE0NDc4MyIsInJvbGUiOlsiV0wiLCJGTCJdLCJuYmYiOjE3NzA5NjYwNTgsImV4cCI6MTc3MTAwOTI1OCwiaWF0IjoxNzcwOTY2MDU4LCJpc3MiOiJodHRwczovL2JtYXdhdGVyZmxvdy5iYW5na29rLmdvLnRoIiwiYXVkIjoiaHR0cHM6Ly9ibWF3YXRlcmZsb3cuYmFuZ2tvay5nby50aCJ9.R0_RC5Tf0x-yMH94vFbnlqeG7lIakmQ3mw9L10RcsO8rKl4Hfi_EF9UScVuAYEFKzKf0i91ocuO10uMHzYOozA'
};

// const params = {
//     headers: {
//         'Autorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjVlYmFjYTRlLTZkNjUtNDJmZC04MzViLWZlZTJkYzQyZDMzNSIsInN1YiI6IjcyMGQ1NzZmLWQwYmQtNDcyMS1iZjIwLTgzMjlkYjllNDFkZiIsImp0aSI6ImYzNGNiOTAwLWJmYTAtNGI2Yy04M2Q5LTJmMTJlNTE0NDc4MyIsInJvbGUiOlsiV0wiLCJGTCJdLCJuYmYiOjE3NzA5NjYwNTgsImV4cCI6MTc3MTAwOTI1OCwiaWF0IjoxNzcwOTY2MDU4LCJpc3MiOiJodHRwczovL2JtYXdhdGVyZmxvdy5iYW5na29rLmdvLnRoIiwiYXVkIjoiaHR0cHM6Ly9ibWF3YXRlcmZsb3cuYmFuZ2tvay5nby50aCJ9.R0_RC5Tf0x-yMH94vFbnlqeG7lIakmQ3mw9L10RcsO8rKl4Hfi_EF9UScVuAYEFKzKf0i91ocuO10uMHzYOozA'
//     }
// };

export default function () {
    const response = http.get(url, { headers: headers_api });

    check(response, {
        'status code validation': (response) => response.status === 200,
    });
};


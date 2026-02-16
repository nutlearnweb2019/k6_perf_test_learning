import http from 'k6/http';
import {check} from 'k6';
import {
  randomIntBetween,
  randomString,
  randomItem,
  uuidv4,
  findBetween,
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
    vus: 10,
    duration: '5s',
};

const auth_url = "https://restful-booker.herokuapp.com/auth";
// const auth_data = open('./test-data/auth-data.json'); ไม่สำเร็จ
const auth_data = {
    "username" : "admin",
    "password" : "password123"
};

export default function () {
    const response = http.post(auth_url, auth_data);
    console.log("printing auth_data:", auth_data);
    console.log("printing response:", response.body);

    check (response, {
        'Status code validation is 200': (response) => response.status === 200,
        'Response Booking Id Validation': (response) => response.body.includes('token')
    });
};

// const url = 'https://restful-booker.herokuapp.com/booking';
// // const booking_data = open('./test-data/booking-data.json'); ไม่สำเร็จ
// const booking_data = {
//     "firstname" : 'Mr.'+randomString(8),
//     "lastname" : randomString(10),
//     "totalprice" : randomIntBetween(1000, 10000),
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2027-06-13",
//         "checkout" : "2027-06-15"
//     },
//     "additionalneeds" : uuidv4()
// };

// export default function () {
//     const response = http.post(url, booking_data)  
//     console.log("printing booking_data:", booking_data);
//     console.log("printing response:", response.body);
        
//     check (response, {
//         'Status code validation is 200': (response) => response.status === 200,
//         'Response Booking Id Validation': (response) => response.body.includes('bookingid')
//     });
// };



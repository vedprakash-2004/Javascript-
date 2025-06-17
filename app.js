const data = {
    email: "ironman@gmailcom",
    password:"abc",
};
const dataCopy = {...data, id: 123, country:"i=India"};

let arr = [1,2,3,4,5];
let obj1 = {...arr};

let obj2 = {..."hello"};
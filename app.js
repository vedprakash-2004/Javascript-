const student = {
    name:"karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math","science"],
    username:"karan@123",
    password:"abcd",
    city:"pune",
};

let {username: user, password: secret, city: place = "mumbai"} = student;
// let password = student.password;
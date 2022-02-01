let users = [
    {userId: 1,fullName: 'Jahongir Xasanov',username: 'jahongir3236',password: '12345678',date: '25.20.2022',email:'xasanovjakhongir3236@gmail.com',status:false},
    {userId: 2,fullName: 'Ali Hakimov',username: 'jahongir3236',password: '12345678',date: '25.20.2022',email:'xasanovjakhongir3236@gmail.com',status:false},
    {userId: 3,fullName: 'Jasur',username: 'jahongir3236',password: '12345678',date: '25.20.2022',email:'xasanovjakhongir3236@gmail.com',status:false},
    {userId: 4,fullName: 'Jahongir Xasanov',username: 'jahongir3236',password: '12345678',date: '25.20.2022',email:'xasanovjakhongir3236@gmail.com',status:false},
    {userId: 5,fullName: 'Xasanov Jahongir ',username: 'jahongir3236',password: '12345678',date: '25.20.2022',email:'xasanovjakhongir3236@gmail.com',status:false}
];
 

const users = JSON.parse(window.localStorage.getItem("users")) || []

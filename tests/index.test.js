const { default: axios } = require("axios");

function sum(a,b) {
    return a + b;
}

const BACKEND_URL="http://localhost:3000"

//describe blocks
describe("Authentication", () => {
    test('User is able to sign up only once', async() => {;
    const username="Souradip"+Math.random();    
    const password="123456";

    const response= await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password,
        type:"admin"
    })

    expect(response.statusCode).toBe(200); // new user signs up successfully
 
    const updatedresponse= await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password,
        type:"admin"
    })
    expect(updatedresponse.statusCode).toBe(400); // user already signed up

    });
})






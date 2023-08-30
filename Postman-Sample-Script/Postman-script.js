import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import {
  group
} from "k6";

export let options = {
  maxRedirects: 4,
  iterations:1,
  vus: 1
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    BASE_URL: "https://test-api.k6.io"
  },
  environment: {
    USERNAME: "test@example.com",
    PASSWORD: "superCroc2020",
    FIRSTNAME: "John",
    LASTNAME: "Doe",
    EMAIL: "test@example.com",
    ACCESS: null,
    REFRESH: null,
    CROCID: null
  }
});

export default function () {
  group("Public APIs", function () {
    postman[Request]({
      name: "List all public crocodiles",
      id: "3ddd46c4-1618-4883-82ff-1b1e3a5f1091",
      method: "GET",
      address: "{{BASE_URL}}/public/crocodiles/"
    });

    postman[Request]({
      name: "Get a single public crocodile",
      id: "9625f17a-b739-4f91-af99-fba1d898953b",
      method: "GET",
      address: "{{BASE_URL}}/public/crocodiles/1/"
    });
  });

  group("Registration and authentication", function () {
    postman[Request]({
      name: "Register a new user",
      id: "d240e1c0-4034-4b3a-90f1-17d927be9ed5",
      method: "POST",
      address: "{{BASE_URL}}/user/register/",
      data: '{\n    "username": "{{USERNAME}}",\n    "first_name": "{{FIRSTNAME}}",\n    "last_name": "{{LASTNAME}}",\n    "email": "{{EMAIL}}",\n    "password": "{{PASSWORD}}"\n}'
    });

    postman[Request]({
      name: "Bearer/JWT token authentication",
      id: "bb2e85a9-39e8-4782-bae6-5fa4c2a4e026",
      method: "POST",
      address: "{{BASE_URL}}/auth/token/login/",
      data: '{\n    "username": "{{USERNAME}}",\n    "password": "{{PASSWORD}}"\n}',
      post(response) {
        var jsonData = response.json();
        pm.environment.set("REFRESH", jsonData.refresh);
        pm.environment.set("ACCESS", jsonData.access);
      }
    });
  });
}

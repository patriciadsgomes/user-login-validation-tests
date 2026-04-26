# User Login Validation Tests

As part of my postgraduate studies in Automated Testing at FACINT, under the mentorship of Professor Júlio de Lima (https://github.com/juliodelimas/), I developed the userLoginValidation function. This project highlights its implementation and testing, covering key authentication scenarios including successful login, expired credentials, and invalid inputs.

## Project Structure

- `src/userLogin.js`: Contains the `userLoginValidation` function and user data.
- `test/userLogin.test.js`: Contains automated tests for the function.
- `package.json`: Project configuration and dependencies.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/user-login-validation-tests.git
   cd user-login-validation-tests
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## How to Run the Project

The main logic is in `src/userLogin.js`. You can import and use the `userLoginValidation` function in your own scripts, or run the provided tests.

## How to Run the Tests

This project uses [Mocha](https://mochajs.org/) for testing. To execute the tests, run:

```sh
npx mocha
```

## Test Cases

The tests cover the following scenarios:
1. Successful login
2. Expired credentials
3. User not found
4. Incorrect password for the found user

## Author

- Patricia da Silva Gomes (https://github.com/patriciadsgomes)

---
Feel free to contribute or open issues if you find any problems!

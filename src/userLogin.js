/* Prerequisites:
Declare an array containing information about website users, with the following properties: id, name, email,
password, and expired (boolean, can be true or false). Add at least one user with expired set to true.

Challenge:
Build a function to perform login. When using the function, it should return a message indicating that the login
was successful if there is a user with a matching email and password. The function should indicate that the
credentials have expired if expired is true. It should also indicate that the credentials are incorrect if the
email does not exist or if the password is incorrect for the given email.

Tests:
Write 4 tests: 1) Success, 2) Expired credentials, 3) User not found, and 4) Incorrect password for the found user.

Example:
login('existing@email.com', 'correctPassword123'); -> 'Login successful'
login('expired@credential.com', 'correctPassword123'); -> 'Please renew your credentials'
*/

const users = [
    {
        id: 1,
        name: 'Michael Thompson',
        email: 'mic_thomp@gmail.com',
        password: 'mthompson2',
        expiration: false
    },
    {
        id: 2,
        name: 'Theresa Jones',
        email: 'theresaj@gmail.com',
        password: 'tjones2',
        expiration: false
    },
    {
        id: 3,
        name: 'Grace Smith',
        email: 'grace_smith@gmail.com',
        password: 'gsmith3',
        expiration: false
    },
    {
        id: 4,
        name: 'Michelle Vega',
        email: 'micvega@gmail.com',
        password: 'mvega3',
        expiration: true
    }
];


export function userLoginValidation(email, password) {


   for (let i = 0; i < users.length; i++) {
       if (users.at(i).email == email) {
            if (users.at(i).password !== password) {
            return 'MESSAGE: Incorrect password for the user';
            }
            if (users.at(i).expiration) {
                return 'MESSAGE: Renew your credentials';
            }
            return 'MESSAGE: Login successful';
       }
   }
    return 'MESSAGE: User not found';   
}

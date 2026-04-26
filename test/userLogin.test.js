import { userLoginValidation } from '../src/userLogin.js';
import assert from 'node:assert';


describe('Login tests', function() {

    it('Validate that when a valid email and password are provided, it returns a success message', function() {
      //Arrange
      const emailToBeValidated = 'mic_thomp@gmail.com';
      const passwordToBeValidated = 'mthompson2';

      //Act
      const returnFunction = userLoginValidation(emailToBeValidated, passwordToBeValidated)

      //Assert
      assert.equal(returnFunction, 'MESSAGE: Login successful')
    });

    it('Validate that when the user has expiration true, it returns credential expired message', function() {
      //Arrange
      const emailToBeValidated = 'micvega@gmail.com';
      const passwordToBeValidated = 'mvega3';

      //Act
      const returnFunction = userLoginValidation(emailToBeValidated, passwordToBeValidated)

      //Assert
      assert.equal(returnFunction, 'MESSAGE: Renew your credentials')
    });

    it('Validate that when the user is not found it returns a user not found message', function() {
      //Arrange
      const emailToBeValidated = 'patricia@gmail.com';
      const passwordToBeValidated = 'patricia123';

      //Act
      const returnFunction = userLoginValidation(emailToBeValidated, passwordToBeValidated)

      //Assert
      assert.equal(returnFunction, 'MESSAGE: User not found')
    });


    it('Validate that when the password is incorrect for the user, it returns a incorrect password message', function() {
      //Arrange
      const emailToBeValidated = 'grace_smith@gmail.com';
      const passwordToBeValidated = 'tjones2';

      //Act
      const returnFunction = userLoginValidation(emailToBeValidated, passwordToBeValidated)

      //Assert
      assert.equal(returnFunction, 'MESSAGE: Incorrect password for the user')
    });

});


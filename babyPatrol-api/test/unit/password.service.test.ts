import { PasswordService } from '../../src/service/password.service';

describe('Password Service Unit Test', () => {
  const passwordService = new PasswordService();
  const passwordToEncrypt = 'hello123';

  describe('encryptPassword test', () => {
    test('should encrypt the password', async() => {
      const encryptedPassword = await passwordService.encryptPassword(passwordToEncrypt);
      expect(encryptedPassword).toBeDefined();
      expect(encryptedPassword.length).toBeGreaterThan(passwordToEncrypt.length);
    });

    test('should fail password encryption', async() => {
      await passwordService.encryptPassword(undefined).catch((ex) => {
        expect(ex).toBeDefined();
      });
    });
  });

  describe('comparePassword test', () => {
    let encryptedPasswordForUse = '';
    beforeAll(async() => {
      encryptedPasswordForUse = await passwordService.encryptPassword(passwordToEncrypt);
    });

    test('should be equivalent', async() => {
      const compareResult = await passwordService.comparePasswords(passwordToEncrypt, encryptedPasswordForUse);
      expect(compareResult).toBeTruthy();
    });

    test('should not be equivalent', async() => {
      const compareResult = await passwordService.comparePasswords('password', encryptedPasswordForUse);
      expect(compareResult).toBeFalsy();
    });

  });  
});

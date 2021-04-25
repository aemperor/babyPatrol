import { hash, compare } from 'bcrypt';

export class PasswordService {
  /**
   * Compares a plaintext password to an hashed password
   * @param sentPassword The plaintext password
   * @param hashedPassword The hashed password
   * @return True if they are the same, false otherwise
   */
  async comparePasswords(sentPassword: string, hashedPassword: string) : Promise<boolean> {
    return await compare(sentPassword, hashedPassword);
  }

  /**
   * Hashes a plaintext password
   * @param password The password to encrypt
   * @return The hashed password
   */
  async encryptPassword(password: string) : Promise<string> {
    return await hash(password, 10);
  }
}
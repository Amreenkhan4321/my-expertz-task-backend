import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const jwtTokenGenerator = async (payload, secretKey) => {
    try {
      const token = jwt.sign(payload, secretKey);
      return token;
    } catch (error) {
      throw error;
    }
  };

  export const hashPassword = async (password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  };



  export const comparePassword = async (password, hashedPassword) => {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw error;
    }
  };
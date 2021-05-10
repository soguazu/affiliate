import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const auth = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;
  const key: string = process.env.AFFILIATE_APP_SECRET;

  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    try {
      const token = authorization.split(' ')[1];
      const decrypted = jwt.verify(token, key);

      request.payload = {
        product: 'T-shirt',
        category: 'cloth',
        country: 'Nigeria',
        userID: '60991c9d57968dbb6df79a84',
      };

      request.user = decrypted;

      next();
    } catch (exception) {
      return response.status(401).json({ message: exception.message });
    }
    return;
  }
  return response.status(401).json({ message: 'Please login' });
};

export default auth;

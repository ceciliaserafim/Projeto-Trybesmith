import jwt, { SignOptions } from 'jsonwebtoken';
// Essa interface dependerá das informações que passamos em nosso payload.
// interface JWTPayload {
//   id: number;
//   name: string;
//   email: string;
// }
// A função create TokenJWT recebe como parâmetro o nosso payload e retorna um token ao usuário.
export default function createTokenJWT(payload: object) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret as string, config);
  return token;
}
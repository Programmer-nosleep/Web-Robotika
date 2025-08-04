import jwt, { type JwtPayload, type VerifyCallback, sign, verify } from "jsonwebtoken";
import { Types } from "mongoose";

type TokenPayload = {
  _id: Types.ObjectId;
  [key: string]: any;
};

export const generateAccessToken = (payload: TokenPayload): string => {
  const secret = process.env?.ACCESS_TOKEN_SECRET;
  if (!secret) throw new Error("ACCESS_TOKEN_SECRET is not defined");

  return sign(payload, secret, { expiresIn: "30s" });
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  const secret = process.env?.REFRESH_TOKEN_SECRET;
  if (!secret) throw new Error("REFRESH_TOKEN_SECRET is not defined");

  return sign(payload, secret, { expiresIn: "7d" });
};

export const generateToken = (payload: TokenPayload): string => {
  const secret = process.env?.SECRET_KEY;
  if (!secret) throw new Error("SECRET_KEY is not defined");

  return sign(payload, secret, { expiresIn: "7d" });
};

export const verifyToken = (
  token: string,
  secretKey: string = process.env?.REFRESH_TOKEN_SECRET!,
  callback?: VerifyCallback<string | JwtPayload>
) => {
  if (!secretKey) throw new Error("Secret key is not provided for verification");

  return verify(token, secretKey, callback);
};

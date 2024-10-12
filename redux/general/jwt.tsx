import JWT from 'expo-jwt';

// JWT Token Encode
export const encodeJson = (encodeData: any, key: any) => JWT.encode(encodeData, key, {
  algorithm: 'HS512',
});

// JWT Token Decode
export const decodeJson = (decodeData: any, key: any) => JWT.decode(decodeData, key);
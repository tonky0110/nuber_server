import jwt from "jsonwebtoken";
const createJWT = (id: number): string => {
  const jwtToken = process.env.JWT_TOKEN || "";
  const token = jwt.sign({ id }, jwtToken);
  return token;
};
export default createJWT;
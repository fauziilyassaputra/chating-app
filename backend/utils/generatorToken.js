import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, // Milisecond
    httpOnly: true, //  prevent xss attacks
    sameSite: "strict",
    secure: process.env.Node_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;

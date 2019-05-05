const jwt = require("jsonwebtoken");
const secret = "@Seegetwear$";
class Jwt {
  sign(data) {
    return new Promise((resolve, reject) => {
      jwt.sign(JSON.stringify(data), secret, (err, token) => {
        if (err) reject(err);
        console.log(token);
        resolve(token);
      });
    });
  }
  verify(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) reject(err);
        console.log("decoded::::::::::::::", decoded);
        resolve(decoded);
      });
    });
  }
}
module.exports = new Jwt();


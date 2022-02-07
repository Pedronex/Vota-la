const { verify } = require("jsonwebtoken");

function autenticarToken(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      erro: "Token Inválido!",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.id = sub;
    return next();
  } catch (err) {
    return res.status(401).json({ erro: "Token expirou!" });
  }
}

module.exports = { autenticarToken };

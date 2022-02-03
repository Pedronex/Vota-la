import { verify } from "jsonwebtoken";

export function autenticarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      erro: "Token Inválido!",
    });
  }

  const [, token] = token.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.id = sub;
    return next();
  } catch (err) {
    return res.status(401).json({ erro: "Token expirou!" });
  }
}

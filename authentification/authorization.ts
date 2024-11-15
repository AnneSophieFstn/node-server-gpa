import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

const SECRET_TOKEN = process.env.ACCESS_TOKEN_SECRET;

const authorize = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Accès refusé: Token manquant" });
    }

    try {
      const decoded = jwt.verify(token, SECRET_TOKEN) as any;
      if (decoded.permissions.includes(requiredPermission)) {
        return next(); // Autoriser l'accès
      } else {
        return res.status(403).json({ message: "Permission refusée" });
      }
    } catch (error) {
      return res.status(403).json({ message: "Token invalide" });
    }
  };
};

export default authorize;

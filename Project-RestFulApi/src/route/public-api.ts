import express from "express";
import { UserController } from "../controller/user-controller"; // Import controllernya

export const publicRouter = express.Router();

// Route bawaan (opsional, buat tes aja)
publicRouter.get('/', (req, res) => {
    res.json({ message: "Hello World!" });
});

// Route REGISTER sesuai spek kamu
publicRouter.post('/api/users', UserController.register);
// Sesuai spek: POST /api/users/login
publicRouter.post('/api/users/login', UserController.login);
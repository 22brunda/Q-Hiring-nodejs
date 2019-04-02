import express from "express";
import userRoute from "../controller/userController";

const router = express.Router();

router.post("/api/signup", userRoute.userSignup);

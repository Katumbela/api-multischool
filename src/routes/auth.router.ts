import authController from "../controllers/auth.controller"

const express = require("express")
const authRouter = express.Router()
  
authRouter.post("/auth/login", authController.login)

export default authRouter